import React, { Component } from 'react';
import { Button } from 'react-bootstrap';



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
                
                <Button className="btn" onClick={() => this.backPage()}>Back to Payment Options</Button>

                <Button className="btn" onClick={() => this.nextPage()}>Complete</Button>


                

            </div>
        );
    }
}
export default Stripe;