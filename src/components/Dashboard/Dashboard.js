import React, { Component } from 'react';
import axios from 'axios';
import {getClaimSummary} from '../../ducks/reducer';
import { connect } from 'react-redux';
import {Jumbotron, Row, Column, Grid, Image, Button} from 'react-bootstrap';
import './Dashboard.css';


class Dashboard extends Component {
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
            this.props.history.push('/comparables')
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
              <p> ACV { claim.acv } </p>
              <p> Tax { claim.taxes } </p>
              <p> License Fees { claim.license_fees } </p>
              <p> Title Fees { claim.title_fees } </p>
              <p> Less Deductible { claim.deductible } </p>
              <p> Net Settlement { claim.settlement } </p>
              <p> Reference ID { claim.reference_id } </p>
              
              </div>
          ));
        return (
            <div className="App">
                <h1>Insured's Claim Summary</h1>
                <h3>Dear Insured,</h3>
                <p>Please review and confirm that you agree with the Actual Cash Value presented by the adjuster as shown above.<br/>
                Click Agree to continue.</p>
                {newSummary}

                <button className="btn" onClick={() => this.backPage()}>Back</button>

                <button className="btn" onClick={() => this.nextPage()}>Continue</button>


                

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

export default connect(mapStateToProps, { getClaimSummary })(Dashboard)