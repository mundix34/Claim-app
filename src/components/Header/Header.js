import React from 'react';
import { connect } from 'react-redux';
import { addUserInfo } from '../../ducks/reducer';
import { Image, Button, Nav, Navbar, NavItem } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Outer = styled.div`
text-align: center;
color: blue;
font-size: 10px;
background-color; #054aba;
`
function Header(props) {
    return (
      props.user.first_last?(
        <Outer className ="outer">
            <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Image className = "logo" src="../images/images_logo_cropped.png" alt='logo' rounded/>
            <h1>Insurance Inc.</h1>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              New
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
              Account
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
              Help
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        </Outer>):<Outer className ="outer">
            <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Image className = "logo" src="../images/images_logo_cropped.png" alt='logo' rounded/>
            <h1>Insurance Inc.</h1>
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