import React, { useState } from "react"
import SearchButton from "widgets/buttons/SearchButton"

const SearchBar = () => {
  const [results, setResults] = useState(null)

  const submit = async (query) => {
    try {
      const APIKEY = process.env.REACT_APP_API_KEY
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${query}`
      )
      if (response.status >= 200 && response.status <= 299) {
        const data = await response.json()
        setResults(data)
      } else throw new Error(response.statusText)
    } catch (err) {
      setResults(null)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      submit(e.target.value)
    }
  }

  return (
    <div className="bg-white text-black flex justify-between align-center p-1 w-80">
      <input
        className="focus:outline-none"
        type="text"
        id="name"
        name="name"
        placeholder="Search for a movie"
        onKeyDown={handleKeyDown}
      />
      <SearchButton onClick={submit} />
    </div>
  )
}

export default SearchBar
