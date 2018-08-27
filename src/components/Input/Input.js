import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserProfile, addFirstName, addLastName, addEmail, addClaim, addAddressOne, addAddressTwo, addCity, addReference, isInsured, addState, addZip, addProfile, addProfileNew, clearFields, addUserInfo } from '../../ducks/reducer';
import axios from 'axios';
import styled from 'styled-components';
import './Input.css';
import Review from '../Review/Review';




const Outer = styled.div`
color: ddd;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
width: 100%;
padding: 0;
margin: 0;

`
const FormDiv = styled.div`
padding: 1rem;
border-radius: 0.5rem;
margin: 0.5rem;
height: 60%;
width: 100%;
display: flex;
justify-content: flex-start;
align-items: center;

`
const MapDiv = styled.div`
color: ddd;
height: 40%;
width: 100%;
margin: 0.5rem;

`
const Button = styled.button`
margin: 0.5rem;
  width: 100px;
  background: #26436d;
  color: white;
  border: 0;
  text-transform: uppercase;
  height: 2.5em;
  border-radius: 3px;

`
const SelectDiv = styled.div`
display: flex;
justify-content: flex-start;
margin: 1.4rem auto;
height: 3.5em;
width: 22rem;
`
const InputField = styled.input`
border-radius: 5px;
margin: 1.5rem;
box-shadow: none;
border: 1px solid grey;
flexBasis: 4px;
`
const ButtonDiv = styled.div`
display: flex;
 justify-content: flex-start;
 align-items: flex-start;
 margin: 2rem;

`
const P = styled.p`
font-weight: 600;
`
const listStyle = {
    boxShadow: '0 0 20px 0 rgba(72, 94, 116, 0.7)',
    padding: '1.5rem',
    height:'100%'
}


class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ref_id: '',
            user_id: '',
            stateUser: [],
            msg: '',
            edit: false,
            form: true,
            profile: false,
            review: false

        }
        this.nextPage = this.nextPage.bind(this);
        this.showEdit = this.showEdit.bind(this);
        this.addProfile = this.addProfile.bind(this);
        this.editProfile = this.editProfile.bind(this);
    }
    componentDidUpdate() {
        axios.get(`/api/get-user/${this.props.user.user_id}`).then(res => {
            this.props.getUserProfile(res.data)
            
        })
    
    }
    

    addProfile() {
        if (!this.props.newUser.firstName) {
            alert('FirstName is required')
        } else if (!this.props.newUser.lastName) {
            alert('Last Name is required')
        } else if (!this.props.newUser.addressOne) {
            alert('Address is required')
        } else if (!this.props.newUser.city) {
            alert('City is required')
        } else if (!this.props.newUser.state) {
            alert('State is required')
        } else if (!this.props.newUser.zip) {
            alert('Zip Code is required')
        }
        else if (!this.props.newUser.claim) {
            alert('Claim Number is required')
        }
        else if (!this.props.newUser.reference) {
            alert('Reference Number is required')
        }
        else {
            axios.post(`/api/register/${this.props.user.user_id}`, this.props.newUser).then(res => {
                this.props.addProfileNew([res.data.response])
                this.setState({
                    ref_id: res.data.response.ref_id,
                    user_id: res.data.response.user_id,
                    stateUser: [res.data.response],
                    msg: res.data.msg,
                    form: false,
                    review: true


                })
                
            })
        }
    }

    showEdit() {
        this.setState({
            form: !this.state.form,
            edit: true
        })
    }


    editProfile() {
        axios.put(`/api/update-user/${this.state.user_id}`, this.props.newUser).then(res => {            
            this.props.addProfileNew(res.data)
            this.setState({
                ref_id: res.data.ref_id,
                form: false

            })
            this.componentDidUpdate()
            
        })
        
    }
    nextPage() {
        this.props.newUser.insured === "yes" ? this.props.history.push(`/dashboard/${this.state.ref_id}`) :
            this.props.newUser.insured === "no" ? this.props.history.push(`/summary/${this.state.ref_id}`) :
                alert('please make a selection')
    }
    render() {
        const newStateUser = this.props.userArray.map((item, i) => (
            <div style={listStyle} className=" animated bounceInRight" key={i}>
                <div className="mapped-list">
                    <P> firstName: {item.given_name} </P>
                    <P> lastName: {item.family_name} </P>
                    <P> AddressOne: {item.address_1} </P>
                    {item.address_2? <P> AddressTwo: {item.address_2} </P>: null}
                    <P> city: {item.city} </P>
                    <P> State: {item.state} </P>
                    <P> Zip Code: {item.zip} </P>
                    <P> Claim Number: {item.claim} </P>
                    <P> Reference Number: {item.ref_id} </P>
                    <P> Email {this.props.user.email} </P>
                    <P> Customer Insured? {this.props.user.insured === 'true' ? 'Yes' : 'No'}</P>
                    <div className="mapped-btns">
                        <Button className="hov" type="submit" onClick={() => this.showEdit()}>Edit</Button>
                        <Button className="hov" onClick={() => this.nextPage()} >Continue</Button>

                    </div>

                </div>




            </div>))
        return (
            <Outer>
                <FormDiv className={this.state.form ? "animated slideInLeft" : "not-showing animated slideInLeft"}>
                    <form className="form-style" onSubmit={e => e.preventDefault()}>
                        <label> Fields marked with an asterisk (*) are Required</label>
                        <div className="input-fields-div">
                            <label>First Name  </label><InputField className="input-field" type="text" placeholder="First Name   * " value={this.props.newUser.firstName} onChange={(e) => this.props.addFirstName(e.target.value.toUpperCase())} />
                        </div>

                        <div className="input-fields-div">
                            <label>Last Name </label><InputField className="input-field" type="text" placeholder="Last Name   * " value={this.props.newUser.lastName} onChange={(e) => this.props.addLastName(e.target.value.toUpperCase())} />
                        </div>

                        <div className="input-fields-div">
                            <label>Email </label><InputField className="input-field" type="email" placeholder="Email   * " value={this.props.newUser.email} onChange={(e) => this.props.addEmail(e.target.value)} />
                        </div>

                        <div className="input-fields-div">
                            <label>Address 1  </label><InputField className="input-field" type="text" placeholder="Address Line 1   * " value={this.props.newUser.addressOne} onChange={(e) => this.props.addAddressOne(e.target.value.toUpperCase())} />
                        </div>

                        <div className="input-fields-div">
                            <label>Address 2 </label><InputField type="text" className="input-field" placeholder="Address Line 2" value={this.props.newUser.addressTwo} onChange={(e) => this.props.addAddressTwo(e.target.value.toUpperCase())} />
                        </div>

                        <div className="input-fields-div">
                            <label>City </label><InputField className="input-field" type="text" placeholder="City  *" value={this.props.newUser.city} onChange={(e) => this.props.addCity(e.target.value.toUpperCase())} />
                        </div>

                        <div className="input-fields-div">
                            <label>State </label> <InputField className="input-field" type="text" placeholder="State *" value={this.props.newUser.state} onChange={(e) => this.props.addState(e.target.value.toUpperCase())} />
                        </div>

                        <div className="input-fields-div">
                            <label>Zip Code </label> <InputField type="number" className="input-field" value={this.props.newUser.zip} placeholder="Zip Code *" onChange={(e) => this.props.addZip(e.target.value)} />
                        </div>

                        <div className="input-fields-div">
                            <label>Claim Number </label> <InputField type="number" className="input-field" value={this.props.newUser.claim} placeholder="Claim Number *" onChange={(e) => this.props.addClaim(e.target.value)} />
                            
                        </div>

                        <div className="input-fields-div">
                            <label>Reference ID ?</label> <InputField className="input-field" type="number" value={this.props.newUser.reference} placeholder="Reference ID *" onChange={(e) => this.props.addReference(e.target.value)} />

                        </div>
                        <div className="input-fields-div">
                            <SelectDiv>
                                <label className="last-label"> Are you insured with Insurance Inc?</label>
                                <select className="input-select" onChange={(e) => this.props.isInsured(e.target.value)}>
                                    <option type="text" value="select" >select</option>
                                    <option type="text" value="yes" >Yes</option>
                                    <option type="text" value="no" >No</option>
                                </select>
                            </SelectDiv>
                        </div>

                        <ButtonDiv>
                            <Button className="hov" onClick={() => this.props.clearFields()}>Cancel</Button>
                            {!this.state.edit ? <Button type="submit" onClick={this.addProfile}>Submit</Button> :
                                <Button className="hov" type="submit" onClick={this.editProfile}>Save</Button>}

                        </ButtonDiv>



                    </form>
                </FormDiv>

                <MapDiv>
                    {newStateUser}
                </MapDiv>
                <div style={{display:'none'}}>

                {this.state.review? <Review msg={this.state.msg}/>: null}
                </div>

            </Outer>
        );
    }
}

function mapStateToProps(state) {
    return {
        newUser: {
            firstName: state.firstName,
            lastName: state.lastName,
            addressOne: state.addressOne,
            addressTwo: state.addressTwo,
            city: state.city,
            state: state.state,
            zip: state.zip,
            reference: state.reference,
            claim: state.claim,
            insured: state.insured,
            email: state.email
        },
        user: state.user,
        userArray: state.userArray
    }
}

export default connect(mapStateToProps, { getUserProfile, addProfileNew, addFirstName, addLastName, addEmail, addClaim, addAddressOne, addAddressTwo, addCity, addReference, isInsured, addState, addZip, addProfile, clearFields, addUserInfo })(Input)
