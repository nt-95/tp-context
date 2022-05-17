import React, { useState } from "react"
import ArticleForm from "widgets/forms/ArticleForm"
import ArticleListSection from "pages/ArticleListSection"
import LogOutLink from "widgets/buttons/LogOutLink"

const ArticlePage = () => {
  const [updateArticleList, setUpdateArticleList] = useState()
  return (
    <>
      <section className="flex justify-between items-center">
        <p className="text-white">
          Connected as{" "}
          <span className="font-bold">
            {sessionStorage.getItem("username")}
          </span>
        </p>
        <LogOutLink />
      </section>
      <ArticleForm setUpdateArticleList={setUpdateArticleList} />
      <ArticleListSection updateArticleList={updateArticleList} />
    </>
  )
}

export default ArticlePage
