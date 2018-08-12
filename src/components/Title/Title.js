import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addUserInfo } from '../../ducks/reducer';
// import axios from 'axios';
import styled from 'styled-components';

const P=styled.p`
font-weight: 500;
font-size: 1.5rem;
`




const btnStyle = {
    margin: '5px',
    width: '150px',
    background: '#26436d',
    color: 'white',
    padding: '0 1.5 rem'
    

}
// function componentDidMount(props) {
//     axios.get('/api/user_data').then(res => {
//         props.addUserInfo(res.data)
//     })
// }
// function componentDidUpdate(props) {
//     axios.get('/api/user_data').then(res => {
//         props.addUserInfo(res.data)
//     })
// }

 function Title (props){
    function previousPage(){
        props.history.push('/title-status')
    }
    function nextPage(){
        props.history.push('/payment')
    }
    return(
        <div>
        <h1>Title Instructions for the State of {props.user.state}</h1>
        <P> You are almost Done!</P>
        <P> In accordance with the regulations of the above mentioned State, Please comPlete the title as follows</P>
        <P>Complete your name as the legal owner and sign next to your name</P>
        <P>Please complete the mileage as follows shown on the right handside and check as Actual</P>
        <P>Finally, please enter the actual cash value on the right handside as the sales Price</P>
        <P>Please see the sample image on the side as a guide</P>

        <P>Proceed to the next page for the payment info section</P>
      <Button style={btnStyle} onClick = {() =>previousPage()}>Previous</Button>
      <Button style={btnStyle} onClick = {() =>nextPage()}>Payment</Button>



        

        </div>

        
    )
}
function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {addUserInfo})(Title)
