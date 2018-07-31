const express = require('express');
const session = require('express-session');
const app = express();
axios = require('axios');
massive = require('massive');
require('dotenv').config();


const { SERVER_PORT, REACT_APP_DOMAIN, REACT_APP_CLIENT_ID, CLIENT_SECRET, SESSION_SECRET, CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING).then(dbSet =>{
    app.set('db', dbSet)
})

app.use(session ({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))




app.listen(SERVER_PORT, () => {
    console.log(`listening on port: ${SERVER_PORT}`);

})
