import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const btnStyle = {
    margin: '5px',
    width: '120px',
    background: '#26436d',
    color: 'white',
    padding: '0 1.5 rem'

}



class StripeDone extends Component {


    nextPage() {

        this.props.history.push("/end")

    }
    backPage() {
        this.props.history.push("/stripe")

    }



    render() {

        return (
            <div className="App">
                <h4>Success, you have completed the Stripe payment method sign up! Please look out for an email from stripe when payment has posted to your Account.</h4>


                <Button style={btnStyle} onClick={() => this.backPage()}>Previous</Button>

                <Button style={btnStyle} onClick={() => this.nextPage()}>Complete</Button>




            </div>
        );
    }
}
export default StripeDone;