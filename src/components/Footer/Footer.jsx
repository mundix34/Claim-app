import React from 'react';
// import { Jumbotron, Row, Column, Grid, Image, Button, Nav, Navbar, NavItem } from 'react-bootstrap';
import './Footer.css'
import styled from 'styled-components';
const Outer = styled.div`
color: eee;
`
const Para = styled.p`
font-size: 16px;
`

export default function Footer(){
    return(
        <Outer>
        <h3>Footer</h3>
        <Para>Thank you for doing business with Insurance Inc.</Para>

        </Outer>

        
    )
}
