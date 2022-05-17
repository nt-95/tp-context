import React, { useEffect, useState } from "react";
import ArticlesList from "../widgets/lists/ArticlesList";
import Title from "./../widgets/text/Title";

const ArticleListSection = ({ updateArticleList }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "http://localhost:2345/index.php/article/list?limit=20"
        );
        if (response.status >= 200 && response.status <= 299) {
          const data = await response.json();
          setArticles(data);
        } else throw new Error(response.statusText);
      } catch (err) {
        setArticles([]);
      }
    }
    fetchData();
  }, [updateArticleList]);

  return (
    <section className="my-6 bg-white p-6">
      <Title>All articles</Title>
      <ArticlesList articles={articles} />
    </section>
  );
};

export default ArticleListSection;
