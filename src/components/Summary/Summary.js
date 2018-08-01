import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {addUserInfo} from '../../ducks/reducer';

class Summary extends Component {
    componentDidMount() {
        axios.get('/api/user_data').then(res => {
            this.props.addUserInfo(res.data)
        })
    }
    

    render() {
        let {user} = this.props;
        console.log(user);
        
        return (
            <div className="App">
                <h1>Claim Summary</h1>
                {
                    user.user_name? (
                        <div>
                            <h3> Hi  {user.user_name} !</h3>
                            
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

export default connect( mapStateToProps, {})(Summary)