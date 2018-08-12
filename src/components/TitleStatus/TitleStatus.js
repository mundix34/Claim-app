import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Button } from 'react-bootstrap';


const btnStyle = {
    margin: '5px',
    width: '80px',
    background: '#26436d',
    color: 'white',
    padding: '0 1.5 rem'

}

class TitleStatus extends Component {
    constructor(props){
        super(props)
        this.state={
            haveTitle: ''

        }
    }
    
    handlePage() {
        this.state.haveTitle ==='yes'? this.props.history.push("/title"):
        this.state.haveTitle ==='other'? this.props.history.push("/End"): alert('Please make a selection') 

    }
    backPage() {
        this.props.history.push("/title-status")

    }
    handleTitleStatus(val){
        this.setState({
            haveTitle: val
        })

    }
    
    

    render() {
        <Sidebar haveTitle={this.state.haveTitle}/>

        
        return (
            <div className="App">
                <h4 className = "semi-heading">In this section you will identify the status of your title, if you have lost or misplaced your title please select "Other"</h4>
                <label>Do you possess your vehicle's title </label> <select onChange={(e) => this.handleTitleStatus(e.target.value)}>

                        <option className = "option-title" type="text" value="select" >select</option>
                        <option className = "option-title" type="text" value="yes" >Yes</option>
                        <option className = "option-title" type="text" value="other" >Other</option>
                    </select> <br />

                <Button style={btnStyle} onClick={() => this.backPage()}>Back</Button>

                <Button style={btnStyle} onClick={() => this.handlePage()}>Continue</Button>



                

            </div>
        );
    }
}
export default TitleStatus;