import { useMovieResultsContext } from "contexts/MovieResultsContext"
import React, { useEffect, useState } from "react"
import ReviewList from "widgets/lists/ReviewList"

const ReviewListSection = () => {
  const [reviews, setReviews] = useState([])
  const { updateReviewList, currentMovie } = useMovieResultsContext()

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:2345/index.php/article/list?movie_id=${currentMovie.id}`
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
  }, [updateReviewList, currentMovie.id])

  return (
    <section className="my-6 text-white w-full">
      <p className="rounded-lg bg-yellow-400 text-2xl md:text-3xl text-black text-center py-4 font-bold">
        📽️ All reviews for this movie 🎞️
      </p>
      <ReviewList reviews={reviews} />
    </section>
  )
}

export default ReviewListSection
