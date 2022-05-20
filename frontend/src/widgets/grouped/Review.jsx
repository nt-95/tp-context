import React from "react"
import Title from "widgets/text/Title"

const Review = ({ review }) => {
  return (
    <div className="bg-yellow-400 py-6 px-3 my-3">
      <Title>{review?.title}</Title>
      <h3 className="italic">
        Posted by{" "}
        <span className="font-bold text-purple-700">{review?.author}</span> on{" "}
        {review?.date}
      </h3>
      <p className="mt-3">{review?.content}</p>
    </div>
  )
}

export default Review
