import React, { Component } from 'react';
import axios from 'axios';


class TitleStatus extends Component {
    constructor(){
        super()
        this.state={
            haveTitle: ''

        }
    }
    
    nextPage() {
        this.state.haveTitle ==="Yes"?
            this.props.history.push(`/title/${this.state.ref_id}`):
            this.props.history.push(`/End/${this.state.ref_id}`)

    }
    backPage() {
        this.props.history.push("/input")
    }
    handleTitleStatus(){

    }
    

    render() {
        
        return (
            <div className="App">
                <h3>In this section you will identify the status of your title, if you have lost or misplaced your title please select "Other"</h3>
                <select onChange={(e) => this.handleTitleStatus(e.target.value)}>

                        <option className = "option-title" type="text" value="select" >select</option>
                        <option className = "option-title" type="text" value="yes" >Yes</option>
                        <option className = "option-title" type="text" value="no" >Other</option>
                    </select> <br />
                <button className="btn" onClick={() => this.backPage()}>Back to Profile</button>

                <button className="btn" onClick={() => this.nextPage()}>Continue</button>


                

            </div>
        );
    }
}
export default TitleStatus;