import React, { Component } from 'react';
import { Button } from 'react-bootstrap';



class Maps extends Component {
    constructor(){
        super()
        this.state={
            maps:[],
            text: ''

        }
    }
    handleText(val){
        this.setState({
            text: val
        })
    }
    
    nextPage() {
        this.props.history.push("/end")

    }
    backPage() {
        this.props.history.push("/payment")

    }
    
    

    render() {
        
        return (
            <div className="App">
                <h4>Now you can find an Agent's office near you to complete a check for title exchange</h4>
                <label>Search for Office</label> <input value = {this.state.text} placeholder = "search by zip code" onChange = {(e) => this.handleText(e.target.value)} ></input><br/>
                
                <Button className="btn" onClick={() => this.backPage()}>Payment Options</Button>
                <Button className="btn" onClick={() => this.nextPage()}>Continue</Button>


                

            </div>
        );
    }
}
export default Maps;