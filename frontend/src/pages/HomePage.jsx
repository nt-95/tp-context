import { useMovieResultsContext } from "contexts/MovieResultsContext"
import PageLayout from "layouts/PageLayout"
import React, { useEffect } from "react"

const HomePage = () => {
  const { setCurrentMovie } = useMovieResultsContext()

  /**  @description Set current movie  to null on home page load */
  useEffect(() => {
    setCurrentMovie(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <PageLayout>HomePage</PageLayout>
}

export default HomePage
