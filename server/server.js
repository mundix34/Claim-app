const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
axios = require('axios');
massive = require('massive');
require('dotenv').config();


const { SERVER_PORT, REACT_APP_DOMAIN, REACT_APP_CLIENT_ID, CLIENT_SECRET, SESSION_SECRET, CONNECTION_STRING} = process.env;


app.use(bodyParser.json());
app.use(session ({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.get('/auth/callback', async (req, res) => {
    let payload ={
        client_id:REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `http://${req.headers.host}/auth/callback`
    }

    let resWithToken= await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload)
    console.log(resWithToken.data.access_token);

    

    let resWithUserData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${resWithToken.data.access_token}`)
    console.log(resWithUserData.data);
    const dbSet = req.app.get('db')
    let {sub, email, name, picture} = resWithUserData.data
    let foundUser = await dbSet.find_user([sub])
    if(foundUser[0]){
        req.session.user = foundUser[0]
        res.redirect('/#/registration')
    } else{
       let createdUser=  await dbSet.create_user([name, email, sub, picture])
       req.session.user = createdUser[0]
       res.redirect('/#/registration')
    }
});

app.get('/api/user_data', (req, res) => {
    if(req.session.user){
        res.status(200).send(req.session.user)
    } else {
        res.status(401).send('You are not authorized')
    }

});
app.get('/api/logout', (req, res) => { 
    req.session.destroy();
    res.send()
})




massive(CONNECTION_STRING).then(dbSet =>{
    app.set('db', dbSet)
})

app.listen(SERVER_PORT, () => {
    console.log(`listening on port: ${SERVER_PORT}`);

})
