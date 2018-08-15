import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFirstName, addLastName, addClaim, addAddressOne, addAddressTwo, addCity, addReference, isInsured, addState, addZip, addProfile, clearFields, addUserInfo } from '../../ducks/reducer';
import axios from 'axios';
import styled from 'styled-components';
import { Col, Row, Button } from 'react-bootstrap';
import './Input.css';



const Outer = styled.div`
color: ddd;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: flex-start;
margin-top: 20px;
`
const Outer1 = styled.div`
color: ddd;
display: flex;
flex-direction: column;
justify-content: space-evenly;
margin-top: 20px;
`
const FormDiv = styled.div`
box-shadow: 0 0 20px 0 rgba(72, 94, 116, 0.7);
padding: 1.5rem;

`

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex start',
}
const btnStyle = {
    margin: '5px',
    width: '80px',
    background: '#26436d',
    color: 'white',
    padding: '0 1.5 rem',
  textTransform: 'uppercase'


}
const pStyle = {
    marginRight: '10px',


}
const SelectDiv = styled.div`
display: flex;
justify-content: space-evenly;
margin: 1.4rem auto;
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
justify-content: center;

`
const P = styled.p`
font-weight: 600;
`
const listStyle = {
    boxShadow: '0 0 20px 0 rgba(72, 94, 116, 0.7)',
    padding: '1.5rem'
}


class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ref_id: '',
            stateUser: [],
            edit: false,
            inputDisabled: false,
            form: true

        }
        this.nextPage = this.nextPage.bind(this);
        this.showEdit = this.showEdit.bind(this);
        this.addProfile = this.addProfile.bind(this);
        this.editProfile = this.editProfile.bind(this);
    }
    componentDidMount() {
        axios.get('/api/user_data').then(res => {
            this.props.addUserInfo(res.data)
        })
    }
    componentDidUpdate() {
        axios.get('/api/user_data').then(res => {
            this.props.addUserInfo(res.data)
        })
    }

    addProfile() {
        if (!this.props.newUser.firstName) {
            alert('FirstName is required')
        } else if (!this.props.newUser.lastName) {
            alert('Last Name is required')
        } else if (!this.props.newUser.address_1) {
            alert('Address is required')
        }  else if (!this.props.newUser.city) {
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
                this.props.addProfile(res.data)
                this.setState({
                    ref_id: res.data.ref_id,
                    stateUser: [res.data],
                    form: false

                })
            })
        }
    }

    showEdit() {
        this.setState({
            form: true,
            edit: true
        })
    }


    editProfile() {
        axios.put(`/api/update_user/${this.props.user.user_id}`, this.props.newUser).then(res => {
            this.props.addProfile(res.data)
            this.setState({
                ref_id: res.data.ref_id,
                stateUser: [res.data],
                form: false

            })
        })
    }
    nextPage() {
        this.props.newUser.insured === "yes" ? this.props.history.push(`/dashboard/${this.state.ref_id}`) :
            this.props.newUser.insured === "no" ? this.props.history.push(`/summary/${this.state.ref_id}`) :
                alert('please make a selection')
    }
    render() {
        const newStateUser = this.state.stateUser.map((item, i) => (
            <Outer style={listStyle} className=" animated bounceInRight" key={i}>
                <P> firstName: {item.firstName} </P>
                <P> lastName: {item.lastName} </P>
                <P> AddressOne: {item.address_1} </P>
                <P> AddressTwo: {item.address_2} </P>
                <P> city: {item.city} </P>
                <P> State: {item.state} </P>
                <P> Zip Code: {item.zip} </P>
                <P> Claim Number: {item.claim} </P>
                <P> Reference Number: {item.ref_id} </P>
                <P> Email Address: {this.props.user.email} </P>
                <P> Customer Insured? {this.props.user.insured==='true'? 'Yes': 'No'}</P>
                <Button style={btnStyle} type="submit" className="btn" onClick={() => this.showEdit()}>Edit</Button>
                <Button style={btnStyle} onClick={() => this.nextPage()} className="btn" >Continue</Button>



            </Outer>))
        return (
            <Outer1>
                <Row>
                    <Col xs="6">
                        <FormDiv className={this.state.form ? "animated slideInLeft" : "not-showing animated slideInLeft"}>
                            <form style={formStyle} onSubmit={e => e.preventDefault()}>
                                <label> Fields marked with an asterisk (*) are Required</label>
                                <span>{this.props.newUser.firstName}</span>
                                <label>First Name  </label><InputField className="input" type="text" placeholder="First Name   * " value={this.props.newUser.firstName} onChange={(e) => this.props.addFirstName(e.target.value.toUpperCase())} />

                                <span>{this.props.newUser.lastName}</span>
                                <label>Last Name </label><InputField className="input" type="text" placeholder="Last Name   * " value={this.props.newUser.lastName} onChange={(e) => this.props.addLastName(e.target.value.toUpperCase())} />

                                <span>{this.props.newUser.addressOne}</span>
                                <label>Address 1  </label><InputField className="input" type="text" placeholder="Address Line 1   * " value={this.props.newUser.addressOne} onChange={(e) => this.props.addAddressOne(e.target.value.toUpperCase())} />
                                <span>{this.props.newUser.addressTwo}</span>

                                <label>Address 2 (Optional) </label><InputField type="text" className="input" placeholder="Address Line 2" value={this.props.newUser.addressTwo} onChange={(e) => this.props.addAddressTwo(e.target.value.toUpperCase())} />
                                <span>{this.props.newUser.city}</span>

                                <label>City </label><InputField className="input" type="text" placeholder="City  *" value={this.props.newUser.city} onChange={(e) => this.props.addCity(e.target.value.toUpperCase())} />
                                <span>{this.props.newUser.state}</span>

                                <label>State </label> <InputField className="input" type="text" placeholder="State *" value={this.props.newUser.state} onChange={(e) => this.props.addState(e.target.value.toUpperCase())} />
                                <span>{this.props.newUser.zip}</span>

                                <label>Claim Number </label> <InputField type="number" className="input" value={this.props.newUser.claim} placeholder="Claim Number *" onChange={(e) => this.props.addClaim(e.target.value)} />
                                <span>{this.props.newUser.claim}</span>

                                <label>Zip Code </label> <InputField type="number" className="input" value={this.props.newUser.zip} placeholder="Zip Code *" onChange={(e) => this.props.addZip(e.target.value)} />
                                <span>{this.props.newUser.reference}</span>

                                <label>Reference ID ?</label> <InputField className="input" type="number" value={this.props.newUser.reference} placeholder="Reference ID *" onChange={(e) => this.props.addReference(e.target.value)} />
                                <SelectDiv>
                                    <label style={pStyle}> Are you insured with Insurance Inc?</label>
                                    <select className="select" onChange={(e) => this.props.isInsured(e.target.value)}>
                                        <option type="text" value="select" >select</option>
                                        <option type="text" value="yes" >Yes</option>
                                        <option type="text" value="no" >No</option>
                                    </select>
                                </SelectDiv>
                                <ButtonDiv>

                                    <Button style={btnStyle} className="btn" onClick={() => this.props.clearFields()}>Cancel</Button>
                                    {!this.state.edit ? <Button style={btnStyle} type="submit" onClick={this.addProfile}>Submit</Button> :
                                        <Button style={btnStyle} type="submit" onClick={this.editProfile}>Save</Button>}

                                </ButtonDiv>



                            </form>
                        </FormDiv>
                    </Col>

                    <Col xs="6">
                        <span>{newStateUser}</span>
                    </Col>


                </Row>


            </Outer1>
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
        },
        user: state.user,
    }
}

export default connect(mapStateToProps, { addFirstName, addLastName, addClaim, addAddressOne, addAddressTwo, addCity, addReference, isInsured, addState, addZip, addProfile, clearFields, addUserInfo })(Input)