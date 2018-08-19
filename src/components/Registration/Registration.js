import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUserInfo } from '../../ducks/reducer';
import './Registration.css';
import styled from 'styled-components';




const Outer = styled.div`
height: 100%;
width: 100%;
display: flex;
align-items: flex-start;
justify-content: center;
margin-top: 3em;
`

const H3 = styled.h3`
font-family: helvetica, cursive;
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
    // componentDidUpdate() {
    //     axios.get('/api/user_data').then(res => {
    //         this.props.addUserInfo(res.data)
    //     })
    // }
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
                {
                    user.first_last ? (
                        <div>
                            <h1 style={{ fontFamily: 'Helvectica' }}>Welcome {user.first_last}</h1>
                            <H3> Service First <span className="dot"> <i className="fas fa-circle"></i></span>Service Fast </H3>
                            <Link to="/input"><Button >Begin</Button></Link>
                            <p> Do you have a reference Id? <Link to="/end" ><span> whats this?</span></Link></p>
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