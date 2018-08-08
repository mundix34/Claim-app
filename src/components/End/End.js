import React from 'react';
import { connect } from 'react-redux';
import { addUserInfo } from '../../ducks/reducer';
import './End.css';
import { Button } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
const Img = styled.img`
height: 60px;
`

library.add(faStroopwafel)


function End(props){
    function nextPage() {
        props.history.push("/review")

    }
    function logOut() {
        props.history.push("/")

    }
    return(
        <div>
        <h3>Please contact Insurance Inc's Claim Office at 1 800 889 0045 to speak with a representative.</h3>
        <p>To better assist you, If you disagree with the vehicle valuation, please provide comparable vehicle values using the following criteria to the following email.</p>
        <p>claims@insuranceinc.org</p>
        <p>Once your email has been received, an adjuster will be in touch with you within 48 hours</p>
        <p>Thank you for doing business with Insurance Inc.</p>
        {/* <FontAwesomeIcon icon = "stroopwafel"/> */}
        <Img className = "stroop" src="../images/stroopwafel-solid.svg" alt='stroopwafel' rounded/>
        <Button bsStyle="primary" onClick={() => nextPage()}>Leave a Feedback</Button>
        <Button bsStyle="primary" onClick={() => logOut()}>Logout</Button>

        {/* <Link to="/"><button className="btn">Logout</button></Link> */}

        </div>

        
    )
}
function mapStateToProps(state) {
    return {
        user: state.user
    }
  }
  
  export default connect(mapStateToProps, { addUserInfo })(End)