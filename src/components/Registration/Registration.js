import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUserInfo } from '../../ducks/reducer';
import { Grid, Button } from 'react-bootstrap';
import './Registration.css';
import styled from 'styled-components';




const Outer = styled.div`
color: ddd;
`
const Img = styled.img`
height: 80px;
border-radius: 60%;
`
const H3 = styled.h3`
font-family: 'Poiret One', cursive;
font-size: 1.5em;

`
const P = styled.p`
font-size: 1.5em;
`
const btnStyle={
    margin: '5px',
    width: '70px',
    background: '#26436d'
}

class Registration extends Component {
    componentDidMount() {
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
                <Grid>
                    <h1 style ={{ fontFamily: 'Poiret One'}}>Welcome</h1>
                    {
                        user.first_last ? (
                            <div>
                                <H3> {user.first_last} !</H3>
                                {/* <p>  Email: {user.email}</p> */}
                                {/* <p> Account Number: {user.auth_id}</p> */}
                                <Img src={user.picture} alt="" />
                                <P> Please proceed to register</P>
                                <Button style={btnStyle} bsStyle="primary" onClick={() => this.logOut()}>Logout</Button>
                                <Link to="/input"><Button style={btnStyle} bsStyle="primary" className="btn" >Register</Button></Link>
                            </div>
                        ) : "Please login"
                    }
                </Grid>
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