// Write your code here

import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  onClickForward = () => {
    this.setState(prevSate => ({count: prevSate.count + 1}))
  }

  onClickBackward = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevSate => ({count: prevSate.count - 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {count} = this.state

    return (
      <div className="bg-container">
        <h1>Reviews</h1>
        <div className="box-container">
          <button
            className="arrow-button"
            onClick={this.onClickBackward}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {count < reviewsList.length ? (
            <div className="reviewer">
              <img
                src={reviewsList[count].imgUrl}
                alt={reviewsList[count].username}
              />
              <p>{reviewsList[count].username}</p>
              <p>{reviewsList[count].companyName}</p>
              <p>{reviewsList[count].description}</p>
            </div>
          ) : (
            <div className="reviewer">
              <img
                src={reviewsList[reviewsList.length - 1].imgUrl}
                alt={reviewsList[reviewsList.length - 1].username}
              />
              <p>{reviewsList[reviewsList.length - 1].username}</p>
              <p>{reviewsList[reviewsList.length - 1].companyName}</p>
              <p>{reviewsList[reviewsList.length - 1].description}</p>
            </div>
          )}

          <button
            className="arrow-button"
            onClick={this.onClickForward}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
