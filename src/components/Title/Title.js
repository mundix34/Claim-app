import React from 'react';
import {Link } from 'react-router-dom';

export default function Title (props){
    function previousPage(){
        props.history.push('/title-status')
    }
    function nextPage(){
        props.history.push('/payment')
    }
    return(
        <div>
        <h3>Title Instructions for the State of Washington</h3>
        <p> You are almost Done!</p>
        <p> In accordance with the regulations of the above mentioned State, Please complete the title as follows</p>
        <p>Complete your name as the legal owner and sign next to your name</p>
        <p>Please complete the mileage as follows shown on the right handside and check as Actual</p>
        <p>Finally, please enter the actual cash value on the right handside as the sales Price</p>
        <p>Please see the sample image on the side as a guide</p>

        <p>Proceed to the next page for the payment info section</p>
      <button className="btn" onClick = {() =>previousPage()}>Back to Title Status</button>
      <button className="btn" onClick = {() =>nextPage()}>Payment Preference</button>



        

        </div>

        
    )
}
