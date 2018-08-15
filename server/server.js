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
var nodemailer = require('nodemailer');


const { SERVER_PORT, REACT_APP_DOMAIN, REACT_APP_CLIENT_ID, G_PASS, GMAIL, CLIENT_SECRET, SESSION_SECRET, CONNECTION_STRING } = process.env;


app.use(bodyParser.json());
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
    let { sub, email, name, picture } = resWithUserData.data
    let foundUser = await dbSet.find_user([sub])
    if (foundUser[0]) {
        req.session.user = foundUser[0]
        res.redirect('/#/registration')
    } else {
        let createdUser = await dbSet.create_user([name, email, sub, picture])
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

app.post('/api/register/:id', us.register);
app.put('/api/update_user/:id', us.updateUser);
app.get('/api/claim/:id', claim.getClaim);
app.get('/api/reviews', review.getReviews);
app.post('/api/review', review.postReview);
app.delete('/api/review/:id', review.deleteReview);
app.get('/api/comparables/:id', claim.getComparables);

//Nodemailer Code
var transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: SERVER_PORT,
    auth: {
      user: GMAIL,
      pass: G_PASS
    }
  });
  
  var mailOptions = {
    from: 'mundix34@gmail.com',
    to: 'wariararachel@yahoo.com',
    subject: 'Claim has been Received',
    text: 'We have received your claim, please allow for 24 hours after your title has been received to process payment!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });





massive(CONNECTION_STRING).then(dbSet => {
    app.set('db', dbSet)
})

app.listen(SERVER_PORT, () => {
    console.log(`listening on port: ${SERVER_PORT}`);

})
