import React from 'react';
import {Link} from 'react-router-dom';
// import { Jumbotron, Row, Column, Grid, Image, Button, Nav, Navbar, NavItem } from 'react-bootstrap';
import './Footer.css'
import styled from 'styled-components';

const Outer = styled.div`
color: eee;
`
const P = styled.p`
font-size: 16px;
font-family: MedievalSharp;
`
const icons={
    margin: '5px',
    fontSize: '2em'
}

export default function Footer(){
    return(
        <Outer>
        <h3>Insurance Inc.</h3>
        <hr/>
        <P> Service First <span className="dot"> <i  class="fas fa-circle"></i></span>Service Fast</P>
        <hr style={{color: 'black'}}/>
        <div>
        <Link to="/facebook" ><i style={icons} className="fab fa-facebook-square"></i></Link>
        <Link to="/twitter" ><i style={icons} className="fab fa-twitter-square"></i></Link>
        <Link to="/youtube" ><i style={icons} className="fab fa-youtube"></i></Link>
        {/* <i class="fas fa-phone"></i>
        <i class="fas fa-envelope"></i>
        <i class="fas fa-map-marker-alt"></i> */}
        </div>
        

        </Outer>

        
    )
}
