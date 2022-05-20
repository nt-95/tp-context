import React from "react"
import Review from "widgets/grouped/Review"

const ReviewList = ({ reviews }) => {
  const displayArticles = () => {
    return reviews.map((review, i) => {
      return <Review key={i} review={review} />
    })
  }

  if (!reviews || !reviews.length) {
    return (
      <div className="py-6 my-3 w-full break-word bg-zinc-900 px-3 rounded-lg">
        There are no reviews yet
      </div>
    )
  }
  return displayArticles().reverse()
}

export default ReviewList
