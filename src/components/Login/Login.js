import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import './Login.css';
import styled from 'styled-components';
const Outer = styled.div`
color: eee;
font-family: Roboto, sans-serif;
margin: 0 auto;
margin-top: 180px;
`
class Login extends Component {
    login(){
        let {REACT_APP_DOMAIN, REACT_APP_CLIENT_ID} = process.env;
        let url =`${window.location.origin}/auth/callback`
        window.location=`https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`

    }
    render() {
      return (
        <Outer>
          <h1>Please Login</h1>
          <Button bsStyle="primary"className = "btn" onClick = {this.login}> Login</Button>
        </Outer>
      );
    }
  }
  
  export default Login;
  