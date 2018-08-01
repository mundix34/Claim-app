import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAddressOne, addAddressTwo, addCity, addReference, addState, addZip, clearFields } from '../../ducks/reducer';
import axios from 'axios';
import { Link } from 'react-router-dom';



class Input extends Component {
    addProfile() {
        // let newUser
        axios.post('/api/register').then(res => {
            this.props.addUserInfo(res.data)
        })
    }
    render() {
        console.log(this.props);
        
        return (
            <div className="app">
                <form>
                    <label> Fields with and asterisk (*) are Required</label><br />
                    <label>Address 1*</label><input className="input" placeholder="Address Line 1" value = {this.props.addressOne} onChange={(e) => this.props.addAddressOne(e.target.value)}></input> <br />
                    <label>Address 2 (Optional)</label><input className="input" placeholder="Address Line 2" value = {this.props.addressTwo} onChange={(e) => this.props.addAddressTwo(e.target.value)}></input><br />
                    <label>City *</label><input className="input" placeholder="City" value = {this.props.city} onChange={(e) => this.props.addCity(e.target.value)}></input> <br />
                    <label>State *</label> <input className="input" placeholder="State" value = {this.props.state} onChange={(e) => this.props.addState(e.target.value)}></input><br />
                    <label>Zip Code *</label> <input className="input" placeholder="Zip Code" value = {this.props.zip} onChange={(e) => this.props.addZip(e.target.value)}></input> <br />
                    Reference ID ? <input className="input" placeholder="Zip Code" value = {this.props.reference} onChange={(e) => this.props.addReference(e.target.value)}></input> <br />

                    <button className="btn" onClick={() => this.props.addProfile()}>Submit</button>
                    <button className="btn" onClick={() => this.props.clearFields()}>Cancel</button>
                    <Link to="/summary"><button className="btn" >Continue</button></Link>


                </form>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        addressOne: state.addressOne,
        addressTwo: state.addressTwo,
        city: state.city,
        state: state.state,
        zip: state.zip,
        reference: state.reference

    }
}

export default connect(mapStateToProps, { addAddressOne, addAddressTwo, addCity, addReference, addState, addZip, clearFields })(Input)