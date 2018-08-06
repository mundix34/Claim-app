import React, { Component } from 'react';


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
                
                <button className="btn" onClick={() => this.backPage()}>Back to Payment Options</button>

                <button className="btn" onClick={() => this.nextPage()}>Complete</button>


                

            </div>
        );
    }
}
export default Stripe;