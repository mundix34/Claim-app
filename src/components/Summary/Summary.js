import React, { Component } from 'react';
import axios from 'axios';
import {getClaimSummary} from '../../ducks/reducer';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';



class Summary extends Component {
    constructor(){
        super()
        this.state={
            ref_id: ''
        }
    }
    componentDidMount() {
        console.log(this.props.reference)
        axios.get(`/api/claim/${this.props.reference}`).then(res => {
            console.log(res);
            this.props.getClaimSummary(res.data)
            this.setState({
                ref_id: res.data.ref_id,
            })
        })
    }
    nextPage() {
            this.props.history.push(`/comparables`)
    }
    backPage() {
            this.props.history.push("/input")
    }
    
    

    render() {

        const newSummary = this.props.summary.map((claim, i) => (      
            <div className = "list" key={ i }>
              {/* <img src={ claim.picture } alt = "pic"/> */}
              <p> { claim.first_last } </p>
              <p> Vehicle Year { claim.vehicle_year } </p>                 
              <p> Make { claim.make } </p>
              <p> model { claim.model } </p>
              <p> Vin Number: { claim.vin } </p>
              <p> Odometer: { claim.odometer } miles </p>
              <p> ACV { claim.acv } </p>
              <p> Tax { claim.taxes } </p>
              <p> License Fees { claim.license_fees } </p>
              <p> Title Fees { claim.title_fees } </p>
              <p> Net Settlement { claim.settlement } </p>
              <p> Reference ID { claim.reference_id } </p>
              
              </div>
          ));
        return (
            <div className="App">
                <h1>Claimant's Claim Summary</h1>
                <h3>Dear Claimant,</h3>
                <p>Please review and confirm that you agree with the Actual Cash Value presented by the adjuster as shown above.<br/>
                Click Agree to continue.</p>
                {newSummary}
                <Button onClick={() => this.backPage()}>Back</Button>

                <Button onClick={() => this.nextPage()}>Continue</Button>
                {/* {
                    user.user_name? (
                        <div>
                            <h3> Hi  {user.user_name} !</h3>
                            
                        </div>
                    ): "Please login"
                } */}

            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        reference: state.user.ref_id,
        summary: state.summary
    }
}

export default connect(mapStateToProps, { getClaimSummary })(Summary)