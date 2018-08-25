import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import './Review.css';
import { connect } from 'react-redux';
import { addUserInfo } from '../../ducks/reducer';



const Textarea = styled.textarea`
border-radius: 6px;
margin: 1rem;
border: 1px solid grey;

`
const Input = styled.input`
border-radius: 6px;
margin: 1rem;
box-shadow: none;
border: 1px solid grey;
`
const btnStyle = {
  margin: '5px',
  width: '90px',
  background: '#26436d',
  color: 'white'
}
const P = styled.p`
font-weight: 400;
`


class Review extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: this.props.userId,
      title: '',
      content: '',
      reviews: [],
      rating: 0,
      colorFill: true,
      msg: this.props.msg


    }
  }

  logOut() {
    alert('Thank you for doing business with us, A rep will be in touch')
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
  addRating(val) {
    this.setState({
      rating: val
    })
  }

  componentDidMount() {
    axios.get('/api/reviews').then((res) => {
      // console.log('testing review', this.props.user.user_id);
      this.setState({
        reviews: res.data,
        userId: this.props.userId
      })
    })
  }
  
  addReview() {
    let review = {
      userId: this.state.userId,
      title: this.state.title,
      content: this.state.content,
      rating: this.state.rating
    }


    axios.post(`/api/review`, review).then(res => {
      console.log(res);
      let newReviews=[...this.state.reviews, ...res.data]
      this.setState({

        reviews: newReviews,
        title: '',
        content: '',
        rating: '',
        colorFill: true
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
    const newReviews = this.state.reviews.map((review, i) => (
      <div className="map-review-list" key={i}>
        <div>
          <h3> {review.title} </h3>
          <P> {review.content} </P>
          { review.rating===1? 
          <div className="review-icons-wrapper">
            <i className={!this.state.colorFill ? "review-icon far fa-star" : "review-icon-clicked fas fa-star"}></i>
            <i className="review-icon far fa-star"></i>
            <i className="review-icon far fa-star"></i>
            <i className="review-icon far fa-star"></i>
            <i className="review-icon far fa-star"></i>
          </div>:
          review.rating===2?
          <div className="review-icons-wrapper">
            <i className={!this.state.colorFill ? "review-icon far fa-star" : "review-icon-clicked fas fa-star"}></i>
            <i className={!this.state.colorFill ? "review-icon far fa-star" : "review-icon-clicked fas fa-star"}></i>
            <i className="review-icon far fa-star"></i>
            <i className="review-icon far fa-star"></i>
            <i className="review-icon far fa-star"></i>

          </div>:
          review.rating===3?
          <div className="review-icons-wrapper">
            <i className={!this.state.colorFill ? "review-icon far fa-star" : "review-icon-clicked fas fa-star"}></i>
            <i className={!this.state.colorFill ? "review-icon far fa-star" : "review-icon-clicked fas fa-star"}></i>
            <i className={!this.state.colorFill ? "review-icon far fa-star" : "review-icon-clicked fas fa-star"}></i>
            <i className="review-icon far fa-star"></i>
            <i className="review-icon far fa-star"></i>

          </div>:
          review.rating===4?
          <div className="review-icons-wrapper">
            <i className={!this.state.colorFill ? "review-icon far fa-star" : "review-icon-clicked fas fa-star"}></i>
            <i className={!this.state.colorFill ? "review-icon far fa-star" : "review-icon-clicked fas fa-star"}></i>
            <i className={!this.state.colorFill ? "review-icon far fa-star" : "review-icon-clicked fas fa-star"}></i>
            <i className={!this.state.colorFill ? "review-icon far fa-star" : "review-icon-clicked fas fa-star"}></i>
            <i className="review-icon far fa-star"></i>

          </div>:
          review.rating===5?
          <div className="review-icons-wrapper">
            <i className={!this.state.colorFill ? "review-icon far fa-star" : "review-icon-clicked fas fa-star"}></i>
            <i className={!this.state.colorFill ? "review-icon far fa-star" : "review-icon-clicked fas fa-star"}></i>
            <i className={!this.state.colorFill ? "review-icon far fa-star" : "review-icon-clicked fas fa-star"}></i>
            <i className={!this.state.colorFill ? "review-icon far fa-star" : "review-icon-clicked fas fa-star"}></i>
            <i className={!this.state.colorFill ? "review-icon far fa-star" : "review-icon-clicked fas fa-star"}></i>
          </div>:
          null
          }
        </div>
        <div className="review-close-div" onClick={() => this.deleteReview(review.id)}> <i className="review-icon-close far fa-window-close"></i> </div>
      </div>
    ));
    return (
      <div className="review-wrapper">
        <form className="review-form">
          <h3> Leave a Feedback</h3>
          <label>Title:</label> <Input className="Input" onChange={(e) => this.addTitle(e.target.value)} value={this.state.title}></Input><br />
          <label>Content:</label> <Textarea className="Input" onChange={(e) => this.addContent(e.target.value)} value={this.state.content}></Textarea><br />
            <label> Rating </label>
            <select className=" review-select" onChange={(e) => this.addRating(e.target.value)}>
              <option value="select">select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
          </select>
          <div className="review-btns">
          <Button style={btnStyle} onClick={() => this.logOut()}> Logout </Button>
          <Button style={btnStyle} onClick={() => this.addReview()}> Submit </Button>
          </div>
        </form>

        <div className="review-list">
          {newReviews}

        </div>


      </div >
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    userId: state.user.user_id
  }
}

export default connect(mapStateToProps, { addUserInfo })(Review)