import React, { Component } from 'react';


class Maps extends Component {
    constructor(){
        super()
        this.state={
            maps:[],
            text: ''

        }
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
                <label>Search for Office</label> <input value = {this.state.text} placeholder = "search by zip code" ></input><br/>
                
                <button className="btn" onClick={() => this.backPage()}>Back to Profile</button>

                <button className="btn" onClick={() => this.nextPage()}>Continue</button>


                

            </div>
        );
    }
}
export default Maps;