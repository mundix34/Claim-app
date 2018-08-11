import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Login.css';
import styled from 'styled-components';

const Outer = styled.div`
color: eee;
font-family: Roboto, sans-serif;
margin: 0 auto;
margin-top: 180px;
`
const btnStyle = {
  margin: '5px',
  width: '80px',
  background: '#26436d',
  color: 'white'
}
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
          {/* <i class="far fa-arrow-alt-circle-right"></i> */}
          <i style={{ margin: '1.5rem' }} className="fas fa-angle-double-right"></i>
          <i style={{ margin: '1.5rem' }} className="fas fa-car"></i>
        </Icons>

        <Button style={btnStyle} onClick={this.login}> Login</Button>
      </Outer>
    );
  }
}

export default Login;
