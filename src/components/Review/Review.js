import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import './Review.css';
import { connect } from 'react-redux';
import { addUserInfo } from '../../ducks/reducer';

const Img = styled.img`
height: 80px;
border-radius: 10px;
margin: 1em;
`


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
        <Img src={review.picture} alt="pic" />
        <hr/>
        <p> Title: {review.title} </p>
        <p> Message: {review.content} </p>
        <hr/>
        <Button onClick={() => this.deleteReview(review.id)}> Remove </Button>
      </div>
    ));
    return (
      <div className="Review">
        <form>
          <h3> <span role="img" aria-label="hand">😇 </span>Post Your Review <span role="img" aria-label="hand"> 👍 </span></h3>
          Title: <input className="Input" onChange={(e) => this.addTitle(e.target.value)} value={this.state.title}></input><br />
          Content: <textarea className="Input" onChange={(e) => this.addContent(e.target.value)} value={this.state.content}></textarea><br />
          <Button className ="btnStyle" onClick={() => this.addReview()}> Add Review </Button>
          <Button className = "btnStyle" onClick={() => this.logOut()}> Logout </Button>
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