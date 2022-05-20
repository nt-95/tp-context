import React from "react"
import placeholderPath from "assets/png/movie-poster-placeholder.png"

const MoviePoster = ({ movie }) => {
  const getImagePath = () => {
    if (!movie.poster_path) {
      return placeholderPath
    }
    return `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  }

  return (
    <img className="h-full lg:w-full" src={getImagePath()} alt="movie poster" />
  )
}

export default MoviePoster
