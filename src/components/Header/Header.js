import React from 'react';
import { connect } from 'react-redux';
import { addUserInfo } from '../../ducks/reducer';
import { Image, Nav, Navbar, NavItem } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Outer = styled.div`
text-align: center;
color: blue;
background: #3862a5;
font-family: farquhar;
`
function Header(props) {
    return (
      props.user.first_last?(
        <Outer >
            <Navbar default collapseOnSelect >
        <Navbar.Header className = "nav-header">
          <Navbar.Brand >
          <div style={{display: 'flex'}}>
            <img className = "logo" src="../images/images_logo_cropped.png" alt='logo' rounded/>
            <div>Insurance Inc.</div>
              
               </div>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={2} componentClass={Link} href="/dashboard" to="/dashboard">
              Summary
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/end" to="/end">
              Help
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/" to="/">
              Logout
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        </Outer>)
        :
        
        <Outer className ="outer">
            <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <div style={{display: 'flex'}}>
            <Image className = "logo" src="../images/images_logo_cropped.png" alt='logo' rounded/>
            <h1>Insurance Inc.</h1>
            </div>
 
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
              Help
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        </Outer>
    )
}
function mapStateToProps(state) {
  return {
      user: state.user
  }
}

export default connect(mapStateToProps, { addUserInfo })(Header)