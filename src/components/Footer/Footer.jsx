import React from 'react';
import { Link } from 'react-router-dom';
// import { Jumbotron, Row, Column, Grid, Image, Button, Nav, Navbar, NavItem } from 'react-bootstrap';
import './Footer.css'
import styled from 'styled-components';

const Outer = styled.div`
color: eee;
height: 100%;
display: flex;
flex-direction: column;
`
const P = styled.p`
font-size: 16px;
font-family: MedievalSharp;
`
const icons = {
    margin: '5px',
    fontSize: '2em'
}

export default function Footer() {
    return (

        <Outer className="outer">
            <div className="row-1">

                <div className="col-1">
                    <img className="logo" src="../images/images_logo_cropped.png" alt='logo' rounded />
                    <h2>Insurance Inc.</h2>
                    <hr className="hr" />
                    <P style={{ color: '#2d323a' }}> Service First <span className="dot"> <i class="fas fa-circle"></i></span>Service Fast</P>
                    <hr className="hr" />

                </div>

                <div className="col-2">
                <div className="vert-line"></div>

                    <div className="contact-icons">
                        <i className=" phone fas fa-phone">   1 800 008 0011</i>
                        <i className=" mail fas fa-envelope">  claims@insuranceinc.com</i>
                        <i className=" address fas fa-map-marker-alt">  123 Main ST Provo Utah 84600</i>
                    </div>
                </div>

            </div>

            <div className="row-2">
                <div className="social-media">
                    <Link to="/facebook" ><i style={icons} className="fab fa-facebook-square"></i></Link>
                    <Link to="/twitter" ><i style={icons} className="fab fa-twitter-square"></i></Link>
                    <Link to="/youtube" ><i style={icons} className="fab fa-youtube"></i></Link>
                </div>

            </div>


        </Outer>


    )
}
