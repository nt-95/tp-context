import { useMovieResultsContext } from "contexts/MovieResultsContext"
import React, { useEffect, useState } from "react"
import ReviewList from "widgets/lists/ReviewList"
import Title from "widgets/text/Title"

const ReviewListSection = () => {
  const [reviews, setReviews] = useState([])
  const { updateReviewList } = useMovieResultsContext()

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "http://localhost:2345/index.php/article/list?limit=20"
        )
        if (response.status >= 200 && response.status <= 299) {
          const data = await response.json()
          setReviews(data)
        } else throw new Error(response.statusText)
      } catch (err) {
        setReviews([])
      }
    }
    fetchData()
  }, [updateReviewList])

  return (
    <section className="my-6 text-white">
      <p className="rounded-lg bg-yellow-400 text-3xl text-black text-center py-4 font-bold">
        All reviews for this movie
      </p>
      <ReviewList reviews={reviews} />
    </section>
  )
}

export default ReviewListSection
