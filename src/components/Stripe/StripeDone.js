import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';



const btnStyle = {
    margin: '5px',
    width: '120px',
    background: '#87D37C',
    color: 'white',
    padding: '0 1.5 rem'

}



class StripeDone extends Component {
    constructor(){
        super()
        this.state={
            user: {}
        }
    }
    componentDidMount(){
        axios.get('https://dashboard.stripe.com/oauth/authorize?response_type=code&client_id=ca_DPYBIC0Oxyl40SYCCKpRwmCoXt2pEQIG&scope=read_write').then(res =>{
            console.log( 'yes', res );
            
            this.setState({user: res.data })
        })
    }


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