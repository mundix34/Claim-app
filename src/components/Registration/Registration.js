import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {addUserInfo} from '../../ducks/reducer';

class Registration extends Component {
    componentDidMount() {
        axios.get('/api/user_data').then(res => {
            this.props.addUserInfo(res.data)
        })
    }
    logOut(){
        axios.get('/api/logout').then( res =>{
            this.props.history.push('/')
        })
    }

    render() {
        let {user} = this.props;
        console.log(user);
        
        return (
            <div className="App">
                <h1>Account Information</h1>
                {
                    user.user_name? (
                        <div>
                            <p> Username: {user.user_name}</p>
                            <p>  Email: {user.email}</p>
                            <p> Account Number: {user.auth_id}</p>
                            <img src ={user.picture} alt = ""/>
                            <button onClick = { () => this.logOut()}>Logout</button>
                        </div>
                    ): "Please login"
                }

            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        user: state.user
    }
}

export default connect( mapStateToProps, {addUserInfo})(Registration)