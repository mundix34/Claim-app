import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import './Review.css';
import { connect } from 'react-redux';
import { addUserInfo } from '../../ducks/reducer';


const Textarea = styled.textarea`
border-radius: 6px;
margin: 1.5rem;
border: 1px solid grey;

`
const Input = styled.input`
border-radius: 6px;
margin: 1.5rem;
box-shadow: none;
border: 1px solid grey;
`
const btnStyle={
  margin: '5px',
  width: '90px',
  background: '#26436d',
  color: 'white'
}


class Review extends Component {
  constructor() {
    super()
    this.state = {
      userId: null,
      title: '',
      content: '',
      reviews: []


    }
  }

  logOut(){
    this.props.history.push("/")
    }
  addTitle(val) {
    this.setState({
      title: val
    })
  }
  addContent(val) {
    this.setState({
      content: val
    })
  }
  
  componentDidMount() {
    axios.get('/api/reviews').then((res) => {
      console.log('test', this.props.user.user_id);
      this.setState({
        reviews: res.data,
        userId: this.props.user.user_id
      })
    })
  }
  componentDidUpdate() {
    axios.get('/api/reviews').then((res) => {
      this.setState({
        reviews: res.data,
        userId: this.props.user.user_id
      })
    })
  }
  
  addReview() {
    let review = {
      userId: this.state.userId,
      title: this.state.title,
      content: this.state.content
    }
    

    axios.post(`/api/review`, review).then(res => {
      console.log(res);

      this.setState({
        
        reviews: res.data,
         title: '', 
         content: ''
      })
    })
  }
  deleteReview(id) {    
    axios.delete(`/api/review/${id}`).then(res => {
      this.setState({
        reviews: res.data
      })
    })
  }

  render() {
    const reviews = this.state.reviews.map((review, i) => (
      <div className="list" key={i}>
        <h3> {review.title} </h3>
        <p> {review.content} </p>
        <Button className="delete" onClick={() => this.deleteReview(review.id)}> X </Button>
      </div>
    ));
    return (
      <div className="Review">
        <form>
          <h3> <span role="img" aria-label="hand">😇 </span> Leave a Feedback <span role="img" aria-label="hand"> 👍 </span></h3>
          <label>Title:</label> <Input className="Input" onChange={(e) => this.addTitle(e.target.value)} value={this.state.title}></Input><br />
          <label>Content:</label> <Textarea className="Input" onChange={(e) => this.addContent(e.target.value)} value={this.state.content}></Textarea><br />
          <Button style={btnStyle} onClick={() => this.addReview()}> Submit </Button>
          <Button style = {btnStyle} onClick={() => this.logOut()}> Logout </Button>
        </form>
        <h3>{reviews}</h3>


      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      user: state.user
  }
}

export default connect(mapStateToProps, { addUserInfo })(Review)