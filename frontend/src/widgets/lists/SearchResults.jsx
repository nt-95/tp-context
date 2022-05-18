import { useMovieResultsContext } from "contexts/MovieResultsContext"
import React from "react"
import MovieResult from "widgets/grouped/MovieResult"

const SearchResults = () => {
  const { searchResults, styleHidden } = useMovieResultsContext()

  const displaySearchResults = () => {
    return searchResults.results.map((result, i) => {
      return <MovieResult key={i} movie={result} />
    })
  }

  if (!searchResults) {
    return null
  }
  return (
    <div
      className={`bg-white w-96 h-3/4 mt-1 absolute text-black overflow-y-scroll ${styleHidden}`}
    >
      {displaySearchResults()}
    </div>
  )
}

export default SearchResults
