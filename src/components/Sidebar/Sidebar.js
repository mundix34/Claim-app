import React from 'react';
import {Link } from 'react-router-dom';
import './Sidebar.css';
import styled from 'styled-components';


const Outer = styled.div`
// background-color: skyblue;
height: 100%;
width: 100%;
padding: 1em;
display: flex;
flex-direction: column;
align-items: flex-start;
`

export default function Sidebar(){
    return(
        <Outer className="side-sidebar">
            <Link to="/profile"><div> <h6>Profile </h6></div></Link>
            <hr/>
            <Link to="/end"><div> <h6> Help</h6></div></Link>
            <hr/>

            <Link to="/privacy"><div> <h6> FAQs</h6></div></Link>
            <hr/>

            <Link to="/"><div> <h6> Sign Out</h6></div></Link>
            <hr/>
    
        </Outer>

        
    )
}
