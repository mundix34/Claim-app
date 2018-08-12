import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
const btnStyle = {
    margin: '5px',
    width: '80px',
    background: '#26436d',
    color: 'white',
    padding: '0 1.5 rem'

}



class Stripe extends Component {
    // constructor(){
    //     super()
    //     this.state={


    //     }
    // }


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

                <Button style={btnStyle} onClick={() => this.backPage()}>Previous</Button>

                <Button style={btnStyle} onClick={() => this.nextPage()}>Complete</Button>




            </div>
        );
    }
}
export default Stripe;