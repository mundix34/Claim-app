import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

const btnStyle = {
    margin: '5px',
    width: '80px',
    background: '#26436d',
    color: 'white',
    padding: '0 1.5 rem'

}



class Payment extends Component {
    constructor(props){
        super(props)
        this.state={
            selectMethod: ''

        }
    }
    
    
    nextPage() {
        this.state.selectMethod ==='stripe'? this.props.history.push("/stripe"):
        this.state.selectMethod ==='check'?this.props.history.push("/input"):
        this.props.history.push("/maps")

    }
    backPage() {
        this.props.history.push("/input")

    }
    handleTitleStatus(val){
        console.log('val', val);
        
        this.setState({
            selectMethod: val
        })

    }
    

    render() {
        
        return (
            <div>
                <h4>Payments are now conveniently issued using Stripe App , You also have the option of picking up a check at your Agent's office if you are insured. Otherwise you can opt to simply receive a check at your mailing address</h4>
                <select onChange={(e) => this.handleTitleStatus(e.target.value)}>

                        <option className = "option-title" type="text" value="select" >select</option>
                        <option className = "option-title" type="text" value="stripe" >Stripe Pay</option>
                        <option className = "option-title" type="text" value="check" >Receive a Check</option>
                        <option className = "option-title" type="text" value="agent" >Title for Check</option>
                    </select> <br />
                <Button bsStyle="primary" style={btnStyle} onClick={() => this.backPage()}>Back to Profile</Button>

                <Button bsStyle="primary" style={btnStyle} onClick={() => this.nextPage()}>Continue</Button>


                

            </div>
        );
    }
}
export default Payment;