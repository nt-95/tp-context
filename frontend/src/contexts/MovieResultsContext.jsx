import PropTypes from "prop-types"
import React, { useContext, useState } from "react"

const MovieResultsContext = React.createContext()

export const useMovieResultsContext = () => {
  return useContext(MovieResultsContext)
}

const MovieResultsProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState(null)

  return (
    <MovieResultsContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </MovieResultsContext.Provider>
  )
}

MovieResultsProvider.propTypes = {
  children: PropTypes.any,
}

export default MovieResultsProvider
