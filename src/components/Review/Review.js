import React, { Component } from 'react';
import axios from 'axios';
// import { connect } from 'react-redux';
// import Button from '../Button/Button'

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
      console.log(res.data[0].user_id);
      this.setState({
        reviews: res.data,
        userId: res.data[0].user_id
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
        <img src={review.picture} alt="pic" />
        <p> Title: {review.title} </p>
        <p> Message: {review.content} </p>
        <button onClick={() => this.deleteReview(review.id)}> Delete </button>
        <button onClick={() => this.addReview()}> Edit </button>
      </div>
    ));
    return (
      <div className="Review">
        <h3>{reviews}</h3>
        <form>
          <h3> Post Your Review</h3>
          Title: <input className="Input" onChange={(e) => this.addTitle(e.target.value)} value={this.state.title}></input><br />
          Content: <input className="Input" onChange={(e) => this.addContent(e.target.value)} value={this.state.content}></input><br />
          <button onClick={() => this.addReview()}> Add Review </button>

        </form>

      </div>
    );
  }
}

export default Review;
