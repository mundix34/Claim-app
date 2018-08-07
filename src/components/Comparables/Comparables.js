import React, { Component } from 'react';
import axios from 'axios';
import { getComparables } from '../../ducks/reducer';
import { connect } from 'react-redux';
import { Button} from 'react-bootstrap';



class Comparables extends Component {
    constructor() {
        super()
        this.state = {
            ref_id: ''
        }
    }
    componentDidMount() {
        axios.get(`/api/comparables/${this.props.reference}`).then(res => {
            console.log(res);
            this.props.getComparables(res.data)
            this.setState({
                ref_id: res.data.ref_id,
            })
        })
    }
    nextPage() {
        this.props.history.push('/title-status')
    }
    backPage() {
        this.props.history.push(`/summary/${this.state.ref_id}`)
    }



    render() {

        const newComparables = this.props.comparables.map((comparable, i) => (
            <div className="table" key={i}>
                <tbody>
                    <tr>
                        <th> Similar {comparable.vehicle_year} {comparable.make} {comparable.model} Reference ID: {comparable.refer_id}</th>
                    </tr>
                    <tr>
                        <th> Reference ID: {comparable.refer_id}</th>
                    </tr>
                    <tr>
                        <th>Your Vehicle</th>
                        <th>Vehicle 1</th>
                        <th>Vehicle 2</th>
                        <th>Vehicle 3</th>
                    </tr>
                    <tr>
                        <td>ACV</td>
                        <td>{comparable.acv}</td>
                        <td>{comparable.value_1}</td>
                        <td>{comparable.value_2}</td>
                        <td>{comparable.value_3}</td>
                        <td>{comparable.value_4}</td>
                    </tr>
                    <tr>
                        <td>Odometer</td>
                        <td>{comparable.odometer}</td>
                        <td>{comparable.odo_1}</td>
                        <td>{comparable.odo_2}</td>
                        <td>{comparable.odo_3}</td>
                        <td>{comparable.odo_4}</td>
                    </tr>
                    <tr>
                        <td>Condition</td>
                        <td>{comparable.condition}</td>
                        <td>{comparable.cond_1}</td>
                        <td>{comparable.cond_2}</td>
                        <td>{comparable.cond_3}</td>
                        <td>{comparable.cond_4}</td>
                    </tr>

                </tbody>
            </div>
        ));
        return (
            <div className="App">
                <h1>View Comparables</h1>
                <p> See how your vehicle's Actual Cash Value(ACV) compares with other similar vehicles within a 500 miles radius of your Zip Code</p>
                <p>Please note that your value is an aggregate of the tabulated values adjusting for Condition and mileage among other things.</p>

                {newComparables}
                <Button className="btn" onClick={() => this.backPage()}>Back</Button>

                <Button className="btn" onClick={() => this.nextPage()}>Continue</Button>

            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        reference: state.user.ref_id,
        comparables: state.comparables
    }
}

export default connect(mapStateToProps, { getComparables })(Comparables)