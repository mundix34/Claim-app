import React, { Component } from 'react';
import axios from 'axios';
import { getComparables } from '../../ducks/reducer';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Chart from '../Chart/Chart';
import Maps from '../Maps/Maps';

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
const listStyle = {
    boxShadow: '0 0 20px 0 rgba(72, 94, 116, 0.7)',
    padding: '1.5rem',
    textAlign: 'center'
}
const P = styled.p`
font-size: 1.5rem;
font-weight: 500;
`



class Comparables extends Component {
    constructor() {
        super()
        this.state = {
            ref_id: '',
            chart: false,
            showMap: false
        }
        this.hideChart = this.hideChart.bind(this)
    }
    componentDidMount() {
        axios.get(`/api/comparables/${this.props.reference}`).then(res => {
            console.log(res);
            this.props.getComparables(res.data)
            this.setState({
                ref_id: res.data.ref_id,
                user_id: res.data.user_id
            })
        })
    }
    showChart() {
        this.setState({
            chart: true
        })
    }
    hideChart() {
        this.setState({
            chart: false
        })
    }
    nextPage() {
        this.props.history.push('/title')
    }
    backPage() {
        this.props.history.push(`/summary/${this.state.ref_id}`)
    }



    render() {

        const newComparables = this.props.comparables.map((comparable, i) => (
            <div className="table animated bounceInRight" key={i}>
                <tbody style={listStyle} >
                    <tr>
                        <th> Reference ID </th>
                        <th> {comparable.refer_id}</th>

                    </tr>
                    <tr>
                        <th> Comparable {comparable.vehicle_year} {comparable.make} {comparable.model}</th>
                        <th> Within 500 Miles radius </th>
                    </tr>
                    <tr>
                        <th>Comparison</th>
                        <th style={{ color: '#ba0343' }}>Your Vehicle</th>
                        <th>Vehicle 1</th>
                        <th>Vehicle 2</th>
                        <th>Vehicle 3</th>
                    </tr>
                    <tr>
                        <th>ACV</th>
                        <th style={{ color: '#ba0343' }}>$ {comparable.acv}</th>
                        <td>$ {comparable.value_1}</td>
                        <td>$ {comparable.value_2}</td>
                        <td>$ {comparable.value_3}</td>
                        <td>$ {comparable.value_4}</td>
                    </tr>
                    <tr>
                        <th>Odometer</th>
                        <th style={{ color: '#ba0343' }}>{comparable.odometer}</th>
                        <td>{comparable.odo_1}</td>
                        <td>{comparable.odo_2}</td>
                        <td>{comparable.odo_3}</td>
                        <td>{comparable.odo_4}</td>
                    </tr>
                    <tr>
                        <th>Condition</th>
                        <th style={{ color: '#ba0343' }}>{comparable.condition}</th>
                        <td>{comparable.cond_1}</td>
                        <td>{comparable.cond_2}</td>
                        <td>{comparable.cond_3}</td>
                        <td>{comparable.cond_4}</td>
                    </tr>

                </tbody>
            </div>
        ));
        return (
            <div className="comp-outer">
                <h1>View Comparables</h1>
                <P> See how your vehicle's Actual Cash Value(ACV) compares with other similar vehicles within a 500 miles radius of your Zip Code</P>
                <P>Please note that your value is an aggregate of the tabulated values adjusting for Condition and mileage among other things.</P>

                <div className="table-render">{newComparables} </div>
               {this.state.chart? <Chart hideChart={this.hideChart} />: null}
                <Button onClick={() => this.backPage()}>Back</Button>
                <Button onClick={() => this.showChart()}>View Chart</Button>
                <Button onClick={() => this.nextPage()}>Continue</Button>
                {this.state.showMap? <Maps userId={this.props.userId}/>: null}


            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        reference: state.user.ref_id,
        userId: state.userArray[0].user_id,
        comparables: state.comparables
    }
}

export default connect(mapStateToProps, { getComparables })(Comparables)