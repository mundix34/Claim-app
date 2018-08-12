import React, { Component } from 'react';
import {Bar} from 'react-chartJs-2';
import { getComparables } from '../../ducks/reducer';
import { connect } from 'react-redux';
import axios from 'axios';

class CompChart extends Component {
    constructor() {
      super()
      this.state = {
        ref_id: ''
        }
      
    }
    componentDidMount() {
        axios.get(`/api/comparables/${this.props.reference}`).then(res => {
            console.log(res);
            this.props.getComparables(res.data)
            this.setState({
                ref_id: res.data.ref_id,
            })
        })
    }
  
    
    render() {
        const newComparables = this.props.comparables.map((comparable, i) => (
            <div>
                <p> comparable.value_1</p>
            

                </div>
        ))
       
      return (
          <div>
          {newComparables}
          

        </div>
        
      )
    }
  }
  function mapStateToProps(state) {
    return {
        reference: state.user.ref_id,
        comparables: state.comparables
    }
}

export default connect(mapStateToProps, { getComparables })(CompChart)