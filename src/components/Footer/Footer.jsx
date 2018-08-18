import React from 'react';
import { Link } from 'react-router-dom';
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
                    <img className="footer-logo" src="../images/images_logo_cropped.png" alt='logo' rounded />
                    <h3>Insurance Inc.</h3>
                    <hr className="hr" />
                    <P style={{ color: '#2d323a' }}> Service First <span className="dot"> <i class="fas fa-circle"></i></span>Service Fast</P>
                    <hr className="hr" />

                </div>

                <div className="col-2">
                <div className="vert-line"></div>

                    <div className="contact-icons-div">
                        <Link to="/phone"><i className=" phone fas fa-phone"> <span>1-800-008-0011 </span> </i></Link>
                        <Link to="/email"><i className=" mail fas fa-envelope"> <span> claims@insuranceinc.com</span> </i></Link>
                        <Link to="/address"> <i className=" address fas fa-map-marker-alt"> <span>123 Main ST Provo Utah 84600 </span></i> </Link>
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
