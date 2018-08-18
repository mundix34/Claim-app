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
font-size: 1em;
color: white;
background: #d0daef;
transition: 0.5s ease-out;

&:hover{
 background: #26436d;
 color: white;
}

`

export default function Sidebar() {
    return (
        <Outer >
            <div className="side-sidebar">

                <Link to="/profile"><div> <h6>Profile </h6></div></Link>
                <hr />
                <Link to="/end"><div> <h6> Help</h6></div></Link>
                <hr />

                <Link to="/privacy"><div> <h6> FAQs</h6></div></Link>
                <hr />

                <Link to="/"><div> <h6> Sign Out</h6></div></Link>
                <hr />
            </div>
            <div className="sidebar-vert-line-wrapper">

            <div className="sidebar-vert-line"></div>
            </div>

        </Outer>


    )
}
