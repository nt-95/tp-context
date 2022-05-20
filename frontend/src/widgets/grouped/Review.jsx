import React from "react"
import Title from "widgets/text/Title"

const Review = ({ review }) => {
  return (
    <div className="py-6 my-3 w-full break-word bg-zinc-900 px-3 rounded-lg">
      <p className="text-xl text-yellow-400 font-bold">{review?.title}</p>
      <h3 className="italic text-zinc-300">
        Posted by{" "}
        <span className="font-bold text-yellow-400">{review?.author}</span> on{" "}
        {review?.date}
      </h3>
      <p className="mt-3 text-zinc-300">{review?.content}</p>
    </div>
  )
}

export default Review
