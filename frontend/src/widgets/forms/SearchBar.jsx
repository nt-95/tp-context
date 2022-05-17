import React from "react"
import SearchButton from "widgets/buttons/SearchButton"

const SearchBar = () => {
  const submit = () => {
    console.log("submit")
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      submit()
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
