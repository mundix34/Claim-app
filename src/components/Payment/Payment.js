import React, { Component } from 'react';
import styled from 'styled-components';


const Button = styled.button`
margin: 1rem;
width: 7em;
background: #26436d;
  color: white;
  border: 0;
  text-transform: uppercase;
  height: 2.5em;
  border-radius: 3px;
`


class Payment extends Component {
    constructor(props){
        super(props)
        this.state={
            selectMethod: ''

        }
    }
    
    
    nextPage() {
        this.state.selectMethod ==='stripe'? this.props.history.push("/stripe"):
        this.state.selectMethod ==='check'?this.props.history.push("/profile"):
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
            <div style={{ paddingTop: '2rem'}}>
                <h4>Payments are now conveniently issued using Stripe App , You also have the option of picking up a check at your Agent's office if you are insured. Otherwise you can opt to simply receive a check at your mailing address</h4>
                <select onChange={(e) => this.handleTitleStatus(e.target.value)}>

                        <option className = "option-title" type="text" value="select" >select</option>
                        <option className = "option-title" type="text" value="stripe" >Stripe Pay</option>
                        <option className = "option-title" type="text" value="check" >Receive a Check</option>
                        <option className = "option-title" type="text" value="agent" >Title for Check</option>
                    </select> <br />
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem'}}>
                        
                <Button onClick={() => this.backPage()}>To Profile</Button>
                <Button onClick={() => this.nextPage()}>Continue</Button>
                    </div>


                

            </div>
        );
    }
}
export default Payment;