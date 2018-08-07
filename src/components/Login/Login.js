import React, {Component} from 'react';
import { Jumbotron, Row, Column, Grid, Image, Button } from 'react-bootstrap';
import './Login.css';
class Login extends Component {
    login(){
        let {REACT_APP_DOMAIN, REACT_APP_CLIENT_ID} = process.env;
        let url =`${window.location.origin}/auth/callback`
        window.location=`https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`

    }
    render() {
      return (
        <div className="App">
          <h1>Please Login</h1>
          <Button bsStyle="primary"className = "btn" onClick = {this.login}> Login</Button>
        </div>
      );
    }
  }
  
  export default Login;
  