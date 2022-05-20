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

  const handleResults = () => {
    if (!searchResults) {
      return null
    }
    if (!searchResults.results.length) {
      return (
        <p className="h-12 flex items-center text-gray-600">No results found</p>
      )
    }
    return displaySearchResults()
  }

  return (
    <div
      className={`bg-white w-96 max-h-[70%] mt-1 absolute text-black overflow-auto z-20 ${styleHidden}`}
    >
      {handleResults()}
    </div>
  )
}

export default SearchResults
