import React from "react"
import ArticlePage from "pages/ArticlePage"
import ConnectionPage from "pages/ConnectionPage"
import { Routes, Route } from "react-router-dom"
import HomePage from "pages/HomePage"

const PageNavigation = () => {
  const getRoute = () => {
    if (
      sessionStorage.getItem("token") &&
      sessionStorage.getItem("token") !== undefined
    ) {
      return <ArticlePage />
    }
    return <ConnectionPage />
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/connection" element={<ConnectionPage />} />
    </Routes>
  )
}

export default PageNavigation
