import React, { Component } from 'react';
import axios from 'axios';
import {getClaimSummary} from '../../ducks/reducer';
import { connect } from 'react-redux';
import { Button} from 'react-bootstrap';
import './Dashboard.css';

const btnStyle = {
    margin: '5px',
    width: '80px',
    background: '#26436d',
    color: 'white',
    padding: '0 1.5 rem'

}


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
            <tbody>

            <tr>
                        <th> Owner</th>
                        <th>{claim.first_last}</th>
                        <th> Reference ID - {claim.reference_id} </th>
                    </tr>
                    <tr>
                        <th> Subject </th>
                        <th> {claim.vehicle_year} {claim.make} {claim.model} </th>
                    </tr>
                    <tr>
                        <th> Description </th>
                        <th> VIN {claim.vin} </th>
                        <th> {claim.odometer} Miles </th>
                    </tr>
                    <tr>
                        <th> ACV </th>
                        <td> ${claim.acv} </td>
                    </tr>
                    <tr>
                        <th> Tax</th>
                        <td>  ${claim.taxes}</td>
                    </tr>

                    <tr>
                        <th> Title Fees</th>
                        <td>  ${claim.title_fees}</td>
                    </tr>
                    <tr>
                        <th> License Fees</th>
                        <td>  ${claim.license_fees}</td>
                    </tr>
                    <tr className='deductible'>
                        <th> Less Deductible</th>
                        <td>  ${claim.deductible}</td>
                    </tr>
                    <tr>
                        <th> Net Settlement</th>
                        <td>  ${claim.settlement}</td>
                    </tr>
                </tbody>
              </div>
          ));
        return (
            <div className="App">
                <h1>Insured's Claim Summary</h1>
                <p>Please review and confirm that you agree with the Actual Cash Value presented by the adjuster as shown above.<br/>
                Click continue if you Agree.</p>
                {newSummary}

                <Button style={btnStyle} className="btn" onClick={() => this.backPage()}>Back</Button>

                <Button style={btnStyle} className="btn" onClick={() => this.nextPage()}>Continue</Button>


                

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