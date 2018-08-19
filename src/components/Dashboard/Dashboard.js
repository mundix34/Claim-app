import React, { Component } from 'react';
import axios from 'axios';
import { getClaimSummary } from '../../ducks/reducer';
import { connect } from 'react-redux';
import './Dashboard.css';
import styled from 'styled-components';


const Button = styled.button`
margin: 1rem;
  width: 150px;
  background: #26436d;
  color: white;
  border: 0;
  text-transform: uppercase;
  height: 2.5em;
  border-radius: 3px;
`
const listStyle = {
    boxShadow: '0 0 20px 0 rgba(72, 94, 116, 0.7)',
    padding: '1.5rem'
}


class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
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
// console.log(this.props.history.location.pathName);

        const newSummary = this.props.summary.map((claim, i) => (
            <div className="list animated bounceInLeft " key={i}>
                <tbody style={listStyle}>

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
                        <td className= " settlement animated bounce" ><strong> ${claim.settlement} </strong> </td>
                    </tr>
                </tbody>
            </div>
        ));
        return (
            <div>
                <h1>Insured's Claim Summary</h1>
                <p>Please review and confirm that you agree with the Actual Cash Value presented by the adjuster as shown above.<br />
                    Click continue if you Agree.</p>
                {newSummary}

                <Button onClick={() => this.backPage()}>Previous</Button>

                <Button onClick={() => this.nextPage()}>Continue</Button>




            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        summary: state.summary,
        userArray: state.userArray,
        reference: state.user.ref_id,

    }
}

export default connect(mapStateToProps, { getClaimSummary })(Dashboard)