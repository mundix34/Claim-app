import React, { Component } from 'react';
import './Login.css';
import styled from 'styled-components';

const Outer = styled.div`
color: eee;
font-family: Roboto, sans-serif;
margin: 0 auto;
margin-top: 180px;
`
const Button = styled.button`
margin: 1rem;
  width: 150px;
  background: #26436d;
  color: white;
  border: 0;
  text-transform: uppercase;
  height: 2.5em;
  border-radius: 3px;
`
  

const Icons = styled.div`
font-size: 3em;
margin: 1.5rem;

`
class Login extends Component {
  login() {
    let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;
    let url = `${window.location.origin}/auth/callback`
    window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`

  }
  render() {
    return (
      <Outer>
        <h1>Start a Claim</h1>
        <Icons>

          <i style={{ margin: '1.5rem' }} className="fas fa-car-crash"></i>
          <i style={{ margin: '1.5rem' }} className="fas fa-angle-double-right"></i>
          <i style={{ margin: '1.5rem' }} className="fas fa-car"></i>
        </Icons>

        <Button onClick={this.login}> Login</Button>
      </Outer>
    );
  }
}

export default Login;
