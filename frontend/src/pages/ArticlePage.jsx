import React, { useState } from "react";
import ArticleForm from "../widgets/forms/ArticleForm";
import ArticleListSection from "./ArticleListSection";
import LogOutButton from "./../widgets/buttons/LogOutButton";

const ArticlePage = () => {
  const [updateArticleList, setUpdateArticleList] = useState();
  return (
    <>
      <section className="flex justify-between items-center">
        <p className="text-white">
          Connected as{" "}
          <span className="font-bold">
            {sessionStorage.getItem("username")}
          </span>
        </p>
        <LogOutButton />
      </section>
      <ArticleForm setUpdateArticleList={setUpdateArticleList} />
      <ArticleListSection updateArticleList={updateArticleList} />
    </>
  );
};

export default ArticlePage;
