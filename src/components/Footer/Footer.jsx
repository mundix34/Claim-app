import React from 'react';
import { Jumbotron, Row, Column, Grid, Image, Button, Nav, Navbar, NavItem } from 'react-bootstrap';
import './Footer.css'
import styled from 'styled-components';
const Outer = styled.div`
text-align: center;
color: blue;
font-size: 10px;
background-color; #054aba;
// display: flex;
`
const Para = styled.p`
font-color: pink;
font-size: 16px;
`

export default function Footer(){
    return(
        <Outer className="sidebar">
        <h3 className ="sub-heading">Footer</h3>
        <Para>Thank you for doing business with Insurance Inc.</Para>

        </Outer>

        
    )
}
