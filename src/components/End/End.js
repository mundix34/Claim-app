import React from 'react';
import { connect } from 'react-redux';
import { addUserInfo } from '../../ducks/reducer';
import './End.css';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const btnStyle = {
    margin: '5px',
    width: '80px',
    background: '#26436d',
    color: 'white',
    padding: '0 1.5 rem'

}
const P = styled.p`
font-size: 1.5rem;
font-weight: 500;
`



function End(props) {
    function nextPage() {
        props.history.push("/review")

    }
    function logOut() {
        props.history.push("/")

    }
    return (
        <div>
            <h3>Please contact Insurance Inc's Claim Office at 1-800-889-0045 to speak with a representative.</h3>
            <P>To better assist you, If you disagree with the vehicle valuation, please provide comparable vehicle values using the following criteria to the following email.</P>
            <P>claims@insuranceinc.org</P>
            <P>Once your email has been received, an adjuster will be in touch with you within 48 hours</P>
            <P>Thank you for doing business with Insurance Inc.</P>
            <P>
                General InsuranceOnline AccountsBilling & PaymentsAgent SelectionOnline Access
                What is the customer service phone number?
                The State Farm toll-free customer service number is 1-800-889-0045.
                Is there a toll-free number for a rate quote?
                Is my account number the same as my policy number?.</P>
            <Button style={btnStyle} bsStyle="primary" onClick={() => nextPage()}>Feedback</Button>
            <Button style={btnStyle} bsStyle="primary" onClick={() => logOut()}>Logout</Button>

        </div>


    )
}
function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { addUserInfo })(End)