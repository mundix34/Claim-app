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
        // let { REACT_APP_CLIENT_ID_STRIPE } = process.env;
        window.location = `https://dashboard.stripe.com/oauth/authorize?response_type=code&client_id=ca_DPYBWGMAwnTG8uj3o2tMNK5Z3SSD06Uh&scope=read_write`
    
      }


    nextPage() {

        this.props.history.push("/end")

    }
    backPage() {
        this.props.history.push("/payment")

    }



    render() {

        return (
            <div className="App">
                <h4>Sign up for Stripe Pay</h4>


                <Button style={btnStyle} onClick={() => this.backPage()}>Previous</Button> <br/>
                <Button style={btnStyle} onClick={() => this.stripePage()}>Stripe</Button> <br/>






            </div>
        );
    }
}
export default Stripe;