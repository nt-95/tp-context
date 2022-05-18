import { getYear } from "helpers/movieHelper/movieFunctions"
import React from "react"

const MovieTitleWithYear = ({ movie }) => {
  const year = getYear(movie.release_date)

  if (!year.length) {
    return <p>{movie.title}</p>
  }
  return <p>{`${movie.title} (${year})`}</p>
}

export default MovieTitleWithYear
