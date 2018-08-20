import React from 'react';
import { connect } from 'react-redux';
import { addUserInfo } from '../../ducks/reducer';
import styled from 'styled-components';

const P=styled.p`
font-weight: 500;
font-size: 1.5rem;
`


const Button = styled.button`
margin: 1rem;
width: 7em;
background: #26436d;
  color: white;
  border: 0;
  text-transform: uppercase;
  height: 2.5em;
  border-radius: 3px;
`

 function Title (props){
    function previousPage(){
        props.history.push('/comparable')
    }
    function nextPage(){
        props.history.push('/title-status')
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
      <Button onClick = {() =>previousPage()}>Previous</Button>
      <Button onClick = {() =>nextPage()}>Payment</Button>



        

        </div>

        
    )
}
function mapStateToProps(state) {
    return {
        user: state.userArray[0]
    }
}

export default connect(mapStateToProps, {addUserInfo})(Title)
