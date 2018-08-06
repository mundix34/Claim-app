import React from 'react';
import './Sidebar.css'
import styled from 'styled-components';
const Outer = styled.div`
text-align: center;
color: blue;
font-size: 10px;
background-color; #054aba;
`
const Para = styled.p`
font-color: pink;
font-size: 16px;
`

export default function Sidebar(){
    return(
        <Outer className="sidebar">
        <h3 className ="sub-heading">Side Bar</h3>
        <Para className ="Paraara">Please see pertinent information on your left</Para>
        <p>Thank you for doing business with Insurance Inc.</p>
        <button className = "btn"></button>

        </Outer>

        
    )
}
