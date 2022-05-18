import { useMovieResultsContext } from "contexts/MovieResultsContext"
import PageLayout from "layouts/PageLayout"
import React, { useEffect } from "react"
import { Navigate } from "react-router-dom"

const MoviePage = () => {
  const { currentMovie } = useMovieResultsContext()

  useEffect(() => {
    console.log(currentMovie)
  }, [currentMovie])

  if (!currentMovie) {
    return <Navigate to="/" />
  }
  return <PageLayout>{currentMovie.title}</PageLayout>
}

export default MoviePage
