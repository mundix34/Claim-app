import React, { Component } from 'react';
import axios from 'axios';
// import { connect } from 'react-redux';
// import Button from '../Button/Button'

class Review extends Component {
  constructor() {
    super()
    this.state = {
      reviewId:'',
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
  // addReview() {
  //   let newReviews = [...this.state.reviews];
  //   newReviews.push(this.state.title, this.state.content)
  //   this.setState({
  //     reviews: newReviews
  //   })
  // }
  componentDidMount() {
    axios.get('/api/reviews').then((res) => {
      // console.log(res.data);
      this.setState({
        reviews: res.data,
        reviewId: res.data[0].id
      })
    })
  }
  addReview() {
    let review = {
      reviewId: this.state.reviewId,
      title: this.state.title,
      content: this.state.content
    }
    
    axios.post(`/api/review`, review).then(res => {
    console.log(res.data);

        this.setState({
            reviews: res.data
        })
    })
}
  render() {
    const reviews = this.state.reviews.map((review, i) => (      
      <div className = "list" key={ i }>
        <img src = {review.picture} alt = "pic"/>
        <p> Title: { review.title } </p>                 
        <p> Message: { review.content } </p>
        </div>
    ));
    return (
      <div className="Review">
        <h3>{reviews}</h3>
        <form>
          <h3> Post Your Review</h3>
          Title: <input className="Input" onChange={(e) => this.addTitle(e.target.value)} value={this.state.title}></input><br/>
          Content: <input className="Input" onChange={(e) => this.addContent(e.target.value)} value={this.state.content}></input><br/>
          <button onClick = {() => this.addReview()}> Add Review </button>
          <button onClick = {() => this.addReview()}> Delete </button>
          <button onClick = {() => this.addReview()}> Edit </button>
        </form>

      </div>
    );
  }
}

export default Review;
