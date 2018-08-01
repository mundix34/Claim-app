import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFirstName } from '../../ducks/reducer';
// import axios from 'axios';


class Input extends Component {
    render() {
        return (
            <div className="app">
                <form>
                    <input className="input" onChange={(e) => this.props.addFirstName(e.target.value)}></input> <br />
                    <input className="input" value="this.props.username"></input> <br />
                    <input className="input" value="this.props.username"></input> <br />
                    <input className="input" value="this.props.username"></input> <br />
                    <button className="btn" onClick={() => this.logOut()}>Submit</button>


                </form>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        firstName: state.firstName
    }
}

export default connect(mapStateToProps, { addFirstName })(Input)