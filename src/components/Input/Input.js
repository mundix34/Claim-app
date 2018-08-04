import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAddressOne, addAddressTwo, addCity, addReference, isInsured, addState, addZip, addProfile, clearFields } from '../../ducks/reducer';
import axios from 'axios';
// import { Link } from 'react-router-dom';



class Input extends Component {
    constructor(){
        super()
        this.state={
            ref_id: null,
            stateUser:[]  
              }
    }

    addProfile() {
        axios.post(`/api/register/${this.props.user.user_id}`, this.props.newUser).then(res => {
            this.props.addProfile(res.data)
            console.log([res.data]);
            
            this.setState({
                ref_id: res.data.ref_id,
                stateUser: [res.data]
            })
        })
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
        this.props.newUser.insured==="yes"? 
        this.props.history.push(`/dashboard/${this.state.ref_id}`):
        this.props.history.push(`/summary/${this.state.ref_id}`)
    }
    render() { 
        const newStateUser = this.state.stateUser.map((item, i) => (
            <div className="list" key={i}>
              <p> AddressOne: {item.address_1} </p>
              <p> AddressTwo: {item.address_2} </p>
              <p> city: {item.city} </p>
              <p> State: {item.state} </p>
              <p> Zip Code: {item.zip} </p>
              <p> Reference Number: {item.ref_id} </p>
              <button type="submit" className="btn" onClick={() => this.editProfile()}>Edit</button>

              
        </div> ))      
        return (
            <div className="app">
                <form onSubmit={e => e.preventDefault()}>
                    <label> Fields with an asterisk (*) are Required</label><br />
                <span>{this.props.newUser.addressOne}</span>
                    <label>Address 1 * </label><input name="addressOne" className="input" placeholder="Address Line 1" value = {this.props.newUser.addressOne} onChange={(e) => this.props.addAddressOne(e.target.value)}></input> <br />
                <span>{this.props.newUser.addressTwo}</span>

                    <label>Address 2 (Optional) </label><input className="input" placeholder="Address Line 2" value = {this.props.newUser.addressTwo} onChange={(e) => this.props.addAddressTwo(e.target.value)}></input><br />
                <span>{this.props.newUser.city}</span>
                    
                    <label>City *</label><input className="input" placeholder="City" value = {this.props.newUser.city} onChange={(e) => this.props.addCity(e.target.value)}></input> <br />
                <span>{this.props.newUser.state}</span>
                    
                    <label>State *</label> <input className="input" placeholder="State" value = {this.props.newUser.state} onChange={(e) => this.props.addState(e.target.value)}></input><br />
                <span>{this.props.newUser.zip}</span>
                    
                    <label>Zip Code *</label> <input className="input" value = {this.props.newUser.zip} placeholder="Zip Code" onChange={(e) => this.props.addZip(e.target.value)}></input> <br />
                <span>{this.props.newUser.reference}</span>
                    
                    <label>Reference ID ?</label> <input className="input" value = {this.props.newUser.reference} placeholder="Reference ID" onChange={(e) => this.props.addReference(e.target.value)}></input> <br />
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
                <span>{newStateUser}</span>

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