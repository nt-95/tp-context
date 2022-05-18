import { useMovieResultsContext } from "contexts/MovieResultsContext"
import React, { useState } from "react"
import SearchButton from "widgets/buttons/SearchButton"

const SearchBar = () => {
  const { setSearchResults } = useMovieResultsContext()
  const [query, setQuery] = useState("")

  const submit = async (query) => {
    try {
      const APIKEY = process.env.REACT_APP_API_KEY
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${query}`
      )
      if (response.status >= 200 && response.status <= 299) {
        const data = await response.json()
        setSearchResults(data)
      } else throw new Error(response.statusText)
    } catch (err) {
      setSearchResults(null)
    }
  }

  /**
   * @description Update the query state with the value of the input field
   * @param {Event} e
   */
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  /**
   * @description Prevents click from bubbling up and submits query
   * @param {Event} e
   */
  const handleClick = (e) => {
    e.preventDefault()
    submit(query)
  }

  /**
   * @description Submits query when Enter is pressed
   * @param {Event} e
   */
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      submit(query)
    }
  }

  return (
    <div className="bg-white text-black flex justify-between align-center p-1 w-96">
      <input
        className="focus:outline-none"
        type="text"
        id="name"
        name="name"
        placeholder="Search for a movie"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
      <SearchButton onClick={handleClick} />
    </div>
  )
}

export default SearchBar
