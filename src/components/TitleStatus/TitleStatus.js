import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';

class TitleStatus extends Component {
    constructor(props){
        super(props)
        this.state={
            haveTitle: ''

        }
    }
    
    // nextPage() {
    //     this.state.haveTitle ==="Yes"?
    //         this.props.history.push(`/title/${this.state.ref_id}`):
    //         this.props.history.push(`/End/${this.state.ref_id}`)

    // }
    handlePage() {
        this.state.handleTitle ==='yes'? this.props.history.push("/title"):
        this.state.handleTitle ==='other'? this.props.history.push("/End"): alert('Please make a selection') 

    }
    backPage() {
        this.props.history.push("/title-status")

    }
    handleTitleStatus(val){
        this.setState({
            handleTitle: val
        })

    }
    

    render() {
        
        return (
            <div className="App">
                <h4 className = "semi-heading">In this section you will identify the status of your title, if you have lost or misplaced your title please select "Other"</h4>
                <label>Do you possess your vehicle's title </label> <select onChange={(e) => this.handleTitleStatus(e.target.value)}>

                        <option className = "option-title" type="text" value="select" >select</option>
                        <option className = "option-title" type="text" value="yes" >Yes</option>
                        <option className = "option-title" type="text" value="other" >Other</option>
                    </select> <br />
                <button className="btn" onClick={() => this.backPage()}>Back</button>

                <button className="btn" onClick={() => this.handlePage()}>Continue</button>
                <Sidebar/>



                

            </div>
        );
    }
}
export default TitleStatus;