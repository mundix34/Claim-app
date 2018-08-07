import React from 'react';
import {Link} from 'react-router-dom';
import './Help.css'

export default function Help(){
    return(
        <div>
        <p>Welcome to Insurance Inc's claim website that is tailored to make the claim process fast and seamless. In order to proceed, you should have a reference pin Number that the adjuster provided to you as determined on a case by case basis. if you do not, please contact us to assist you in resolving your total loss claim as soon as possible</p>
        <h3>Please contact Insurance Inc's Claim Office at 1 800 889 0045 to speak with a representative.</h3>
        <p> You can also email us at claims@insuranceinc.org for a prompt response</p>
        
        <Link to="/"><button className="btn">Logout</button></Link>

        </div>

        
    )
}
