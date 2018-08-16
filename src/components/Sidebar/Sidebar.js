import React from 'react';
import './Sidebar.css';
import styled from 'styled-components';


const Outer = styled.div`
text-align: center;
font-size: 10px;
background-color; #054aba;
`
const P = styled.p`
font-size: 1.5rem;
font-weight: 500;
`

export default function Sidebar(){
    return(
        <Outer className="sidebar">
            <div> <h4>Profile </h4></div>
            <div> <h4> Help</h4></div>
            <div> <h4> FAQs</h4></div>
            <div> <h4> Sign Out</h4></div>
    
        </Outer>

        
    )
}
