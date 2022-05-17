import React from "react";
import Title from "./../text/Title";

const Article = ({ article }) => {
  return (
    <div className="bg-white py-6 my-3">
      <Title>{article?.title}</Title>
      <h3 className="italic">
        Posted by{" "}
        <span className="font-bold text-purple-700">{article?.author}</span> on{" "}
        {article?.date}
      </h3>
      <p className="mt-3">{article?.content}</p>
    </div>
  );
};

export default Article;
