import React from "react"
import ArticlePage from "pages/ArticlePage"
import ConnectionPage from "pages/ConnectionPage"

const PageNavigation = () => {
  const getPage = () => {
    if (
      sessionStorage.getItem("token") &&
      sessionStorage.getItem("token") !== undefined
    ) {
      return <ArticlePage />
    }
    return <ConnectionPage />
  }

  return getPage()
}

export default PageNavigation
