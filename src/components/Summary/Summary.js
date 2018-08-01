import React, { Component } from 'react';
import axios from 'axios';
import {addUserInfo} from '../../ducks/reducer';

class Summary extends Component {
    componentDidMount() {
        let id = 1;
        axios.get(`/api/claims/${id}`).then(res => {
            console.log(res);
            
            this.props.addClaimInfo(res.data)
        })
    }
    

    render() {
        // let {user} = this.props;
        // console.log(user);
        
        return (
            <div className="App">
                <h1>Claim Summary</h1>
                {/* {
                    user.user_name? (
                        <div>
                            <h3> Hi  {user.user_name} !</h3>
                            
                        </div>
                    ): "Please login"
                } */}

            </div>
        );
    }
}
// function mapStateToProps(state){
//     return{
//         user: state.user
//     }
// }

export default Summary