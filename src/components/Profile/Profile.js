import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserProfile, addUserInfo } from '../../ducks/reducer';
import axios from 'axios';
import styled from 'styled-components';
import './Profile.css';




const Outer = styled.div`
color: ddd;
margin-top: 1em;
height: 100%;
width: 100%;
padding: 0;
margin: 0;


`


const MapDiv = styled.div`
color: ddd;
margin-top: 1rem;
height: 100%;
width: 100%;
`
const Button = styled.button`
margin: 1rem;
  width: 100px;
  background: #26436d;
  color: white;
  border: 0;
  text-transform: uppercase;
  height: 2.5em;
  border-radius: 3px;

`


const P = styled.p`
font-weight: 600;
`
const listStyle = {
    boxShadow: '0 0 20px 0 rgba(72, 94, 116, 0.7)',
    padding: '1.5rem'
}


class Profile extends Component {

    componentDidMount() {
        axios.get(`/api/get-user/${this.props.user.user_id}`).then(res => {
            this.props.getUserProfile(res.data)
            
        })
    
    }

    
    
    nextPage() {
         this.props.history.push("/end")
    }

    render() {
        const newUserArray = this.props.userArray.map((item, i) => (
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
                    <P> Email {item.email} </P>
                    <P> Customer Insured? {item.insured === 'true' ? 'Yes' : 'No'}</P>
                    <div className="mapped-btns">
                        <Button className="hov" onClick={() => this.nextPage()} >Edit</Button>
                        <Button className="hov" onClick={() => this.nextPage()} >Confirm</Button>

                    </div>

                </div>




            </div>))
        return (
            <Outer>
                <h3> Please verify your mailing address is correct if you selected payment by check</h3>
        <MapDiv> {newUserArray}</MapDiv>
        {/* <Button onClick={() => this.backPage()}>To Profile</Button> */}

            </Outer>
        );
    }
}



function mapStateToProps(state) {
    return {
        user: state.user,
        userArray: state.userArray
    }
}

export default connect(mapStateToProps, { addUserInfo, getUserProfile })(Profile)