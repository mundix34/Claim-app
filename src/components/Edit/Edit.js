import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFirstName, addLastName, addEmail, addClaim, addAddressOne, addAddressTwo, addCity, addReference, isInsured, addState, addZip, addProfile, clearFields, addUserInfo } from '../../ducks/reducer';
import axios from 'axios';
import styled from 'styled-components';
import './Edit.css';
import { Col, Row } from 'react-bootstrap';





const Outer = styled.div`
color: ddd;
display: flex;
flex-direction: column;
justify-content: space-evenly;
margin-top: 20px;
height: 100%;

`

const MapDiv = styled.div`
color: ddd;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: flex-start;
margin-top: 1rem;
height: 100%;
width: 40%;
`
const Button = styled.button`
margin: 1rem;
  width: 150px;
  background: #26436d;
  color: white;
  border: 0;
  text-transform: uppercase;
  height: 2.5em;
  border-radius: 3px;
//   &:hover{
//       background:#efb247;
//   }
`


const P = styled.p`
font-weight: 600;
`
const listStyle = {
    boxShadow: '0 0 20px 0 rgba(72, 94, 116, 0.7)',
    padding: '1.5rem'
}


class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ref_id: '',
            stateUser: [],
            edit: false,
            inputDisabled: false,
            form: true

        }
        this.editProfile = this.editProfile.bind(this);
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

    render() {
        const newStateUser = this.state.stateUser.map((item, i) => (
            <div style={listStyle} className=" animated bounceInRight" key={i}>
                <div className="mapped-list">
                <P> firstName: {item.given_name} </P>
                <P> lastName: {item.family_name} </P>
                <P> AddressOne: {item.address_1} </P>
                <P> AddressTwo: {item.address_2} </P>
                <P> city: {item.city} </P>
                <P> State: {item.state} </P>
                <P> Zip Code: {item.zip} </P>
                <P> Claim Number: {item.claim} </P>
                <P> Reference Number: {item.ref_id} </P>
                <P> Email {this.props.user.email} </P>
                <P> Customer Insured? {this.props.user.insured==='true'? 'Yes': 'No'}</P>
                <div className="mapped-btns"> 
                <Button className="hov" type="submit" onClick={() => this.showEdit()}>Edit</Button>
                <Button className="hov" onClick={() => this.nextPage()} >Continue</Button>

                </div>
                
                    
                </div>
                



            </div>))
        return (
            <Outer>
                <Row>
                    <Col xs="6">
                        <MapDiv>{newStateUser}</MapDiv>
                    </Col>


                </Row>


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
    }
}

export default connect(mapStateToProps, { addFirstName, addLastName, addEmail, addClaim, addAddressOne, addAddressTwo, addCity, addReference, isInsured, addState, addZip, addProfile, clearFields, addUserInfo })(Edit)