import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAddressOne, addAddressTwo, addCity, addReference, isInsured, addState, addZip, addProfile, clearFields } from '../../ducks/reducer';
import axios from 'axios';
// import { Link } from 'react-router-dom';



class Input extends Component {
    constructor(){
        super()
        this.state={
            ref_id: null
        }
    }

    addProfile() {
        axios.post(`/api/register/${this.props.user.id}`, this.props.newUser).then(res => {
            this.props.addProfile(res.data)
            this.setState({
                ref_id: res.data.ref_id
            })
        })
    }
    nextPage() {
        this.props.newUser.insured==="yes"? 
        this.props.history.push(`/dashboard/${this.state.ref_id}`):
        this.props.history.push(`/summary/${this.state.ref_id}`) 
    }
    render() {        
        return (
            <div className="app">
                <form onSubmit={e => e.preventDefault()}>
                    <label> Fields with an asterisk (*) are Required</label><br />
                    <label>Address 1*</label><input name="addressOne" className="input" placeholder="Address Line 1" value = {this.props.newUser.addressOne} onChange={(e) => this.props.addAddressOne(e.target.value)}></input> <br />
                    <label>Address 2 (Optional)</label><input className="input" placeholder="Address Line 2" value = {this.props.newUser.addressTwo} onChange={(e) => this.props.addAddressTwo(e.target.value)}></input><br />
                    <label>City *</label><input className="input" placeholder="City" value = {this.props.newUser.city} onChange={(e) => this.props.addCity(e.target.value)}></input> <br />
                    <label>State *</label> <input className="input" placeholder="State" value = {this.props.newUser.state} onChange={(e) => this.props.addState(e.target.value)}></input><br />
                    <label>Zip Code *</label> <input className="input" placeholder="Zip Code" value = {this.props.newUser.zip} onChange={(e) => this.props.addZip(e.target.value)}></input> <br />
                    Reference ID ? <input className="input" placeholder="Reference ID" value = {this.props.newUser.reference} onChange={(e) => this.props.addReference(e.target.value)}></input> <br />
                    <p> Are you insured with Claim Co?</p>
                    <select onChange={(e) => this.props.isInsured(e.target.value)}>

                        <option type="text" value="select" >select</option>
                        <option type="text" value="yes" >Yes</option>
                        <option type="text" value="no" >No</option>
                        </select> <br/>

                    <button type="submit" className="btn" onClick={() => this.addProfile()}>Submit</button>
                    <button className="btn" onClick={() => this.props.clearFields()}>Cancel</button>
                    <button onClick = {() => this.nextPage()}className="btn" >Continue</button>


                </form>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        newUser: {
            addressOne: state.addressOne,
            addressTwo: state.addressTwo,
            city: state.city,
            state: state.state,
            zip: state.zip,
            reference: state.reference,
            insured: state.insured,
        },
        user: state.user,
    }
}

export default connect(mapStateToProps, { addAddressOne, addAddressTwo, addCity, addReference, isInsured, addState, addZip, addProfile, clearFields })(Input)