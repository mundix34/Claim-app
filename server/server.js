const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
axios = require('axios');
massive = require('massive');
require('dotenv').config();
const claim = require('./controllers/claim_controller');
const us = require('./controllers/user_controller');
const review = require('./controllers/reviews_controller');
const md = require('./controllers/middleware_controller');
const nodemailer = require('nodemailer');
const AWS = require('aws-sdk');


const { SERVER_PORT, REACT_APP_DOMAIN, REACT_APP_CLIENT_ID, G_PASS, GMAIL, CLIENT_SECRET, SESSION_SECRET, CONNECTION_STRING, AMAZON_KEY_ID,
    AMAZON_ACCESS_KEY,AWS_REGION, AWS_BUCKET } = process.env;

app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
//bypass Login

app.use(md.bypassAuthInDevelopment({ 
    user_id: 1,
    ref_id: 1591,
    first_last: 'Rachel K',
    email: GMAIL,
    auth_id: 'google-oauth2|115448227667362892125',
    picture: 'https://lh5.googleusercontent.com/-rAbq9zdM7UQ/AAAAAAAAAAI/AAAAAAAAAJQ/eRYy3NjE4RM/photo.jpg',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    zip:'',
    is_insured: ''

}));
app.get('/auth/callback', async (req, res) => {
    let payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `http://${req.headers.host}/auth/callback`
    }

    let resWithToken = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload)



    let resWithUserData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${resWithToken.data.access_token}`)
    console.log(resWithUserData.data);
    const dbSet = req.app.get('db');
    let { given_name, family_name, sub, email, name, picture } = resWithUserData.data
    let foundUser = await dbSet.find_user([sub])
    if (foundUser[0]) {
        req.session.user = foundUser[0]
        res.redirect('/#/registration')
    } else {
        let createdUser = await dbSet.create_user([given_name, family_name, name, email, sub, picture])
        req.session.user = createdUser[0]
        res.redirect('/#/registration')

    }
});

app.get('/api/user_data', (req, res) => {
    if (req.session.user) {
        res.status(200).send(req.session.user)
    } else {
        res.status(401).send('You are not authorized')
    }

});
app.get('/api/logout', (req, res) => {
    req.session.destroy();
    res.send()
})
//endpoints
app.put('/api/update_user/:id', us.updateUser);
app.get('/api/claim/:id', claim.getClaim);
app.get('/api/reviews', review.getReviews);
app.post('/api/review', review.postReview);
app.delete('/api/review/:id', review.deleteReview);
app.get('/api/comparables/:id', claim.getComparables);

//Post endpoint + Nodemailer code
app.post('/api/register/:id', (req, res) => {
    const dbSet = req.app.get('db');
    
         const userMessage='We have received your claim'       
        const { firstName,lastName, addressOne, addressTwo, city, state, zip, reference, claim, insured, email} = req.body;
        const adminMessage = `A New Claim has been received
                
                User: ${ firstName } ${lastName}
               Claim Number: ${ claim }
                Reference Number: ${ reference }
               Insured? ${ insured }
                `;
        dbSet.post_user([req.params.id, reference, firstName, lastName, email, addressOne, addressTwo, city, state, zip, claim, insured])
            .then(([response]) => res.status(200).send( {msg: userMessage, response}))
            .catch(err => {
                res.status(500).send({ errorMessage: 'Oops, an error occured' })
                console.log(err);
            })
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                secure: false,
                port: SERVER_PORT,
                auth: {
                  user: GMAIL,
                  pass: G_PASS
                }
              });
              
              var emailUserOptions = {
                from: GMAIL,
                to: email ,
                subject: 'Claim has been Received',
                text: userMessage
              };
              var emailAdminOptions = {
                from: GMAIL,
                to:  GMAIL,
                subject: 'User has been Received',
                text: adminMessage
              };
              
              transporter.sendMail(emailUserOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
              transporter.sendMail(emailAdminOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
            
    });

// AWS S3
AWS.config.update({
    accessKeyId: AMAZON_KEY_ID,
    secretAccessKey: AMAZON_ACCESS_KEY,
    region: AWS_REGION,
  });
  const S3 = new AWS.S3();

  app.post('/api/s3', (req, res) => {
    const photo = req.body;
  
    const buf = new Buffer(photo.file.replace(/^data:image\/\w+;base64,/, ''), 'base64');
  
    const params = {
      Bucket: AWS_BUCKET,
      Body: buf,
      Key: photo.filename,
      ContentType: photo.filetype,
      ACL: 'public-read',
    };
    S3.upload(params, (err, data) => {
        let response, code;
        if (err) {
          response = err;
          code = 500;
        } else {
          response = data;
          code = 200;
        }
        res.status(code).send(response);
      });
    });






massive(CONNECTION_STRING).then(dbSet => {
    app.set('db', dbSet)
})

app.listen(SERVER_PORT, () => {
    console.log(`listening on port: ${SERVER_PORT}`);

})
