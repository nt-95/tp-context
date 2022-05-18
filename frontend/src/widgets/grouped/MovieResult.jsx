import { useMovieResultsContext } from "contexts/MovieResultsContext"
import MoviePosterThumbnailLayout from "layouts/MoviePosterThumbnailLayout"
import React from "react"
import { Link } from "react-router-dom"
import MoviePoster from "widgets/embedding/MoviePoster"
import MovieTitleWithYear from "widgets/text/MovieTitleWithYear"

const MovieResult = ({ movie }) => {
  const { setCurrentMovie } = useMovieResultsContext()
  const handleClick = () => {
    setCurrentMovie(movie)
  }

  return (
    <Link to="/movie_page" onClick={handleClick}>
      <div className="flex p-2">
        <MoviePosterThumbnailLayout>
          <MoviePoster movie={movie} />
        </MoviePosterThumbnailLayout>
        <MovieTitleWithYear movie={movie} />
      </div>
    </Link>
  )
}

export default MovieResult
