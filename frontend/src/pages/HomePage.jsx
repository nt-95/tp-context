import { useMovieResultsContext } from "contexts/MovieResultsContext"
import { useUserContext } from "contexts/UserContext"
import PageLayout from "layouts/PageLayout"
import React, { useEffect } from "react"
import MoviePostersMarquee from "widgets/embedding/MoviePostersMarquee"

const HomePage = () => {
  const { setCurrentMovie } = useMovieResultsContext()
  const { username } = useUserContext()

  /**  @description Set current movie  to null on home page load */
  useEffect(() => {
    setCurrentMovie(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getUserName = () => {
    if (!username) {
      return null
    }
    return <span>{`, ${username}`}</span>
  }

  return (
    <PageLayout>
      <MoviePostersMarquee />
      <div className="flex items-center justify-center z-10 h-full w-full bg-black/50">
        <p className="text-3xl text-white text-center">
          Welcome to the official IMBd webpage
          {getUserName()}
        </p>
      </div>
    </PageLayout>
  )
}

export default HomePage
