import { useMovieResultsContext } from "contexts/MovieResultsContext"
import MoviePosterWideLayout from "layouts/MoviePosterWideLayout"
import PageLayout from "layouts/PageLayout"
import React from "react"
import { Navigate } from "react-router-dom"
import MoviePoster from "widgets/embedding/MoviePoster"
import ReviewArea from "widgets/grouped/ReviewArea"

const MoviePage = () => {
  const { currentMovie } = useMovieResultsContext()

  if (!currentMovie) {
    return <Navigate to="/" />
  }
  return (
    <PageLayout>
      <div className="p-4 mx-4 text-white h-full w-full md:flex overflow-auto">
        <MoviePosterWideLayout>
          <MoviePoster movie={currentMovie} />
        </MoviePosterWideLayout>
        <section className="md:ml-2 md:max-w-[50%] lg:w-[70%]">
          <p className="text-xl mt-6 md:mt-0 mb-6">{currentMovie.title}</p>
          <p className="mt-2">{currentMovie.release_date}</p>
          <p className="mt-2 mb-4">{`Note: ${currentMovie.vote_average}`}</p>
          <p className="mt-2 text-zinc-300">{currentMovie.overview}</p>
          <ReviewArea />
        </section>
      </div>
    </PageLayout>
  )
}

export default MoviePage
