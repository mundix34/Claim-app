import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import styled from 'styled-components';


const Outer = styled.div`
height: 100%;
width: 100%;
padding: 0;
margin-left:0;
display: flex;
background: #d0daef;
transition: 0.4s ease-out;

&:hover{
 background: #26436d;
}

`

export default function Sidebar() {
    return (
        <Outer >
            <div className="side-sidebar">

                <Link to="/profile"> <h6 style={{color: '#2f2f30', fontSize: '1.5rem'}}>Profile </h6></Link>
                <hr />
                <Link to="/end"> <h6 style={{color: '#2f2f30', fontSize: '1.5rem'}}> Help</h6></Link>
                <hr />

                <Link to="/faq"> <h6 style={{color: '#2f2f30', fontSize: '1.5rem'}}> FAQs</h6></Link>
                <hr />

                <Link to="/"> <h6 style={{color: '#2f2f30', fontSize: '1.5rem'}}> Sign Out</h6></Link>
                <hr />
            </div>
            <div className="sidebar-vert-line-wrapper">

            <div className="sidebar-vert-line"></div>
            </div>

        </Outer>


    )
}
