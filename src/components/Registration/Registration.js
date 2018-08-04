import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {addUserInfo} from '../../ducks/reducer';

class Registration extends Component {
    componentDidMount() {
        axios.get('/api/user_data').then(res => {
            // console.log([res.data]);
            
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
                    user.first_last? (
                        <div>
                            <h3> Hi  {user.first_last} !</h3>
                            {/* <p>  Email: {user.email}</p> */}
                            {/* <p> Account Number: {user.auth_id}</p> */}
                            {/* <img src ={user.picture} alt = ""/> */}
                            <p> Please register on the next page to proceed</p>
                            <button onClick = { () => this.logOut()}>Logout</button>
                            <Link to = "/input"><button className = "btn" >Register</button></Link>
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