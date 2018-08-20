import React, { Component } from 'react';
import { Button } from 'react-bootstrap';



const btnStyle = {
    margin: '5px',
    width: '120px',
    background: '#26436d',
    color: 'white',
    padding: '0 1.5 rem'

}



class Stripe extends Component {
    stripePage() {
        let { REACT_APP_STRIPE_URI } = process.env;
        window.location = REACT_APP_STRIPE_URI// when hosting, you only need to change the client id since you are now using the test client id, also you need to give stripe your https redirect page
    
      }


    nextPage() {

        this.props.history.push("/end")

    }
    backPage() {
        this.props.history.push("/payment")

    }



    render() {

        return (
            <div style={{ paddingTop: '2rem'}}>
                <h4>Sign up for Stripe Pay</h4>
                <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem'}}>
                <Button style={btnStyle} onClick={() => this.backPage()}>Previous</Button> <br/>
                <Button style={btnStyle} onClick={() => this.stripePage()}>Stripe</Button> <br/>
                </div>






            </div>
        );
    }
}
export default Stripe;