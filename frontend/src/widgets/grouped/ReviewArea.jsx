import React, { useState } from "react"
import ReviewForm from "widgets/forms/ReviewForm"
import ReviewListSection from "widgets/sections/ReviewListSection"
import { useUserContext } from "contexts/UserContext"

const ReviewArea = () => {
  const [updateReviewList, setUpdateReviewList] = useState()
  const { username } = useUserContext()

  if (!username) {
    return null
  }
  return (
    <>
      <ReviewForm setUpdateReviewList={setUpdateReviewList} />
      <ReviewListSection updateReviewList={updateReviewList} />
    </>
  )
}

export default ReviewArea
