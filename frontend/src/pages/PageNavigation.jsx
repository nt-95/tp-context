import React from "react"
import ConnectionPage from "pages/ConnectionPage"
import { Routes, Route } from "react-router-dom"
import HomePage from "pages/HomePage"
import MoviePage from "pages/MoviePage"

const PageNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/connection" element={<ConnectionPage />} />
      <Route path="/movie" element={<MoviePage />} />
    </Routes>
  )
}

export default PageNavigation
