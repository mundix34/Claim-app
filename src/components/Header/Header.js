import React from 'react';
import { connect } from 'react-redux';
import { addUserInfo } from '../../ducks/reducer';
import { Image, Nav, Navbar, NavItem } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Img = styled.img`
height: 7rem;
border-radius: 60%;
`

const Outer = styled.div`
text-align: center;
background: #133260;
font-family: farquhar;
`


function Header(props) {
  return (
    props.user.first_last ? (
      <Outer >
        <Navbar default collapseOnSelect >
          <Navbar.Header className="nav-header">
            <Navbar.Brand >
              <div className="new-div">
                <img className="header-logo" src="../images/images_logo_cropped.png" alt='logo' rounded />
                <h1>Insurance Inc.</h1>

              </div>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse >
            <Nav pullRight>
              
              <NavItem eventKey={1} componentClass={Link} href="/dashboard" to="/dashboard">
                Summary
            </NavItem>
              <NavItem eventKey={2} componentClass={Link} href="/end" to="/end">
                Help Center
            </NavItem>
              <NavItem eventKey={3} componentClass={Link} href="/" to="/">
                Logout
            </NavItem>
            <NavItem eventKey={4} componentClass={Link} href="/dashboard" to="/dashboard">
                <Img className="profile-pic" src={props.user.picture} alt="pic" />
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Outer>)
      :

      <Outer>
        <Navbar default collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <div style={{ display: 'flex' }}>
                <Image className="header-logo" src="../images/images_logo_cropped.png" alt='logo' rounded />
                <h1>Insurance Inc.</h1>
              </div>

            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={3} componentClass={Link} href="/end" to="/end">
                Help Center
            </NavItem>
              <NavItem>
                |
            </NavItem>
              <NavItem eventKey={4} componentClass={Link} href="/" to="/">
                Login
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