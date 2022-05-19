import React from "react"
import placeholderPath from "assets/png/movie-poster-placeholder.png"

const MoviePoster = ({ movie }) => {
  const imageURL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  if (!movie.poster_path) {
    return (
      <img
        className="object-scale-down max-w-[90%] h-full"
        src={placeholderPath}
        alt="poster placeholder"
      />
    )
  }
  return (
    <img
      className="object-scale-down max-w-[90%] h-full"
      src={imageURL}
      alt="movie poster"
    />
  )
}

export default MoviePoster
