import React from "react"
import ReviewForm from "widgets/forms/ReviewForm"
import { useUserContext } from "contexts/UserContext"

const ReviewArea = () => {
  const { username } = useUserContext()

  if (!username) {
    return (
      <p className="mt-6 text-yellow-400">
        You must be logged in to post a review
      </p>
    )
  }
  return <ReviewForm />
}

export default ReviewArea
