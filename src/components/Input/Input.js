import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAddressOne, addAddressTwo, addCity, addReference, isInsured, addState, addZip, addProfile, clearFields } from '../../ducks/reducer';
import axios from 'axios';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';


const Outer = styled.div`
color: ddd;
`


class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ref_id: '',
            stateUser: [],
            disableInput: false

        }
        this.nextPage = this.nextPage.bind(this);
    }

    addProfile() {
        if(!this.props.newUser.addressOne){
            alert('Address is required')
    } else if (!this.props.newUser.city){
        alert('City is required')
    } else if(!this.props.newUser.zip){
    } else if (!this.props.newUser.state){
        alert('State is required')
    } else if(!this.props.newUser.zip){
        alert('Zip Code is required')
    }
     else if(!this.props.newUser.reference){
        alert('Reference Number is required')
    }
    else {
        axios.post(`/api/register/${this.props.user.user_id}`, this.props.newUser).then(res => {
            this.props.addProfile(res.data)
            this.setState({
                ref_id: res.data.ref_id,
                stateUser: [res.data]
            })
        })
    }
    }
    editProfile() {
        axios.put(`/api/update_user/${this.props.user.user_id}`, this.props.newUser).then(res => {
            this.props.addProfile(res.data)
            this.setState({
                ref_id: res.data.ref_id,
                stateUser: [res.data]

            })
        })
    }
    nextPage() {
        this.props.newUser.insured === "yes" ? this.props.history.push(`/dashboard/${this.state.ref_id}`) :
        this.props.newUser.insured === "no" ? this.props.history.push(`/summary/${this.state.ref_id}`): 
        alert('please make a selection')
    }
    render() {
        const newStateUser = this.state.stateUser.map((item, i) => (
            <Outer className="list" key={i}>
                <p> AddressOne: {item.address_1} </p>
                <p> AddressTwo: {item.address_2} </p>
                <p> city: {item.city} </p>
                <p> State: {item.state} </p>
                <p> Zip Code: {item.zip} </p>
                <p> Reference Number: {item.ref_id} </p>
                <button type="submit" className="btn" onClick={() => this.editProfile()}>Edit</button>


            </Outer>))
        return (
            <Outer>
                <form onSubmit={e => e.preventDefault()}>
                    <label> Fields with an asterisk (*) are Required</label><br />
                    <span>{this.props.newUser.addressOne}</span>
                    <label>Address 1 * </label><input className="input" type ="text" placeholder="Address Line 1" value={this.props.newUser.addressOne} onChange={(e) => this.props.addAddressOne(e.target.value.toUpperCase())}></input> <br />
                    <span>{this.props.newUser.addressTwo}</span>

                    <label>Address 2 (Optional) </label><input type ="text" className="input" placeholder="Address Line 2" value={this.props.newUser.addressTwo} onChange={(e) => this.props.addAddressTwo(e.target.value.toUpperCase())}></input><br />
                    <span>{this.props.newUser.city}</span>

                    <label>City *</label><input className="input" type ="text" placeholder="City" value={this.props.newUser.city} onChange={(e) => this.props.addCity(e.target.value.toUpperCase())}></input> <br />
                    <span>{this.props.newUser.state}</span>

                    <label>State *</label> <input className="input" type ="text" placeholder="State" value={this.props.newUser.state} onChange={(e) => this.props.addState(e.target.value.toUpperCase())}></input><br />
                    <span>{this.props.newUser.zip}</span>

                    <label>Zip Code *</label> <input type ="number"className="input" value={this.props.newUser.zip} placeholder="Zip Code" onChange={(e) => this.props.addZip(e.target.value)}></input> <br />
                    <span>{this.props.newUser.reference}</span>

                    <label>Reference ID ?</label> <input className="input" type ="number" value={this.props.newUser.reference} placeholder="Reference ID" onChange={(e) => this.props.addReference(e.target.value)}></input> <br />
                    <p> Are you insured with Insurance Inc?</p>
                    <select onChange={(e) => this.props.isInsured(e.target.value)}>
                        <option type="text" value="select" >select</option>
                        <option type="text" value="yes" >Yes</option>
                        <option type="text" value="no" >No</option>
                    </select> <br />

                    <Button className="btn" onClick={() => this.props.clearFields()}>Cancel</Button>
                    <Button type="submit" className="btn" onClick={() => this.addProfile()}>Submit</Button>
                    <Button onClick={() => this.nextPage()} className="btn" >Continue</Button>



                </form>
                <span>{newStateUser}</span>

            </Outer>
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