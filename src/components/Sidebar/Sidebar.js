import React from 'react';
import {Link } from 'react-router-dom';
import './Sidebar.css';
import styled from 'styled-components';


const Outer = styled.div`
font-size: 10px;
background-color: skyblue;
height: 100%;
width: 100%;
padding: 1em;
`

export default function Sidebar(){
    return(
        <Outer className="side-sidebar">
            <Link to="/profile"><div> <h4>Profile </h4></div></Link>
            <hr/>
            <Link to="/end"><div> <h4> Help</h4></div></Link>
            <hr/>

            <Link to="/privacy"><div> <h4> FAQs</h4></div></Link>
            <hr/>

            <Link to="/"><div> <h4> Sign Out</h4></div></Link>
    
        </Outer>

        
    )
}
