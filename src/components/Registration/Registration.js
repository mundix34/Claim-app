import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUserInfo } from '../../ducks/reducer';
import './Registration.css';
import styled from 'styled-components';




const Outer = styled.div`
color: ddd;
height: 100%;
width: 100%;
`

const H3 = styled.h3`
font-family: 'Poiret One', cursive;
font-size: 1.5em;
margin-top: 2em;

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
`

class Registration extends Component {
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
    logOut() {
        axios.get('/api/logout').then(res => {
            this.props.history.push('/')
        })
    }

    render() {
        let { user } = this.props;
        console.log(user);

        return (
            <Outer>
                    <h1 style ={{ fontFamily: 'Poiret One'}}>Welcome</h1>
                    {
                        user.first_last ? (
                            <div>
                                <H3> {user.first_last} !</H3>
                                <Link to="/input"><Button >Begin</Button></Link>
                            </div>
                        ) : "Please login"
                    }
            </Outer>
        );
    }
}
function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { addUserInfo })(Registration)