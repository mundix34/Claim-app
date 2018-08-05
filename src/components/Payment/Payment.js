import React, { Component } from 'react';


class Payment extends Component {
    constructor(props){
        super(props)
        this.state={
            selectMethod: ''

        }
    }
    
    // nextPage() {
    //     this.state.haveTitle ==="Yes"?
    //         this.props.history.push(`/title/${this.state.ref_id}`):
    //         this.props.history.push(`/End/${this.state.ref_id}`)

    // }
    handlePage() {
        this.state.handleTitle ==='yes'?
        this.props.history.push("/title"):
        this.props.history.push("/End")

    }
    backPage() {
        this.props.history.push("/input")

    }
    handleTitleStatus(val){
        this.setState({
            handleTitle: val
        })

    }
    

    render() {
        
        return (
            <div className="App">
                <h3>Payments are now conveniently issued using Stripe App , You also have the option of picking up a check at your Agent's office if you are insured. Otherwise you can opt to simply receive a check at your mailing address</h3>
                <select onChange={(e) => this.handleTitleStatus(e.target.value)}>

                        <option className = "option-title" type="text" value="select" >select</option>
                        <option className = "option-title" type="text" value="Stripe Method" >Stripe Pay</option>
                        <option className = "option-title" type="text" value="Mail me A Check" >Check in the Mail</option>
                        <option className = "option-title" type="text" value="Find an agent's office near Me" >Find An Agent's Office</option>
                    </select> <br />
                <button className="btn" onClick={() => this.backPage()}>Back to Profile</button>

                <button className="btn" onClick={() => this.handlePage()}>Continue</button>


                

            </div>
        );
    }
}
export default Payment;