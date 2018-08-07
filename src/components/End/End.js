import React from 'react';
import {Link} from 'react-router-dom';
import './End.css';
import { Grid, Button } from 'react-bootstrap';


export default function End(props){
    function nextPage() {
        props.history.push("/review")

    }
    function backPage() {
        props.history.push("/payment")

    }
    return(
        <div>
        <h3>Please contact Insurance Inc's Claim Office at 1 800 889 0045 to speak with a representative.</h3>
        <p>To better assist you, If you disagree with the vehicle valuation, please provide comparable vehicle values using the following criteria to the following email.</p>
        <p>claims@insuranceinc.org</p>
        <p>Once your email has been received, an adjuster will be in touch with you within 48 hours</p>
        <p>Thank you for doing business with Insurance Inc.</p>
        <Button bsStyle="primary" onClick={() => nextPage()}>Leave a Feedback</Button>

        {/* <Link to="/"><button className="btn">Logout</button></Link> */}

        </div>

        
    )
}
