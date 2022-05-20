import React from "react"
import ReviewForm from "widgets/forms/ReviewForm"
import ReviewListSection from "widgets/sections/ReviewListSection"
import { useUserContext } from "contexts/UserContext"

const ReviewArea = () => {
  const { username } = useUserContext()

  if (!username) {
    return null
  }
  return (
    <>
      <ReviewForm />
      <ReviewListSection />
    </>
  )
}

export default ReviewArea
