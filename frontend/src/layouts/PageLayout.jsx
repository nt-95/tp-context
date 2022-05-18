import React, { useEffect } from "react"
import NavigationMenu from "widgets/sections/NavigationMenu"
import HeaderLayout from "layouts/HeaderLayout"
import ContentLayout from "layouts/ContentLayout"
import { useMovieResultsContext } from "contexts/MovieResultsContext"

const PageLayout = ({ children }) => {
  const { currentMovie, setSearchResults, setStyleHidden } =
    useMovieResultsContext()

  /**  @description Set search results to null when currentMovie changes */
  useEffect(() => {
    setSearchResults(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentMovie])

  /**  @description Set search results style to hidden when the user clicks somewhere on the page */
  const handleClick = () => {
    setStyleHidden("hidden")
  }

  return (
    <div className="h-screen" onClick={handleClick}>
      <HeaderLayout>
        <NavigationMenu />
      </HeaderLayout>
      <ContentLayout>{children}</ContentLayout>
    </div>
  )
}

export default PageLayout
