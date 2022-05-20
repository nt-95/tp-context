import React from "react"
import Review from "widgets/grouped/Review"

const ReviewList = ({ reviews }) => {
  const displayArticles = () => {
    return reviews.map((review, i) => {
      return <Review key={i} review={review} />
    })
  }

  return displayArticles().reverse()
}

export default ReviewList
