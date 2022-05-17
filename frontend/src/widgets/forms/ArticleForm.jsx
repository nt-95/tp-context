import React, { useState } from "react"
import Label from "widgets/forms/Label"
import Form from "widgets/forms/Form"
import InputSection from "widgets/forms/InputSection"
import Input from "widgets/forms/Input"
import Button from "widgets/buttons/Button"
import Title from "widgets/text/Title"
import ErrorMessage from "widgets/text/ErrorMessage"

const ArticleForm = ({ setUpdateArticleList }) => {
  const [articleData, setArticleData] = useState({})
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e) => {
    setErrorMessage("")
    setArticleData({ ...articleData, [e.target.id]: e.target.value })
  }

  const postArticle = async () => {
    const headers = new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer${sessionStorage.getItem("token")}`,
    })
    try {
      const response = await fetch(
        "http://localhost:2345/index.php/article/post",
        {
          method: "POST",
          body: JSON.stringify(articleData),
          headers: headers,
          mode: "cors",
          credentials: "include",
        }
      )
      if (response.status >= 200 && response.status <= 299) {
        const data = await response.json()
        console.log(data)
        setUpdateArticleList(Math.random() * 1000000)
        setArticleData({})
      } else throw new Error(response.statusText)
    } catch (err) {
      setErrorMessage(err.toString())
    }
  }

  const submit = () => {
    if (!articleData.title || !articleData.content) {
      setErrorMessage("Fields can not be empty")
      return
    }
    postArticle()
  }

  return (
    <Form>
      <Title>Write an article</Title>
      <InputSection>
        <Label>Title</Label>
        <Input
          placeholder="Enter title"
          id="title"
          type="text"
          value={articleData?.title ?? ""}
          onChange={(e) => handleChange(e)}
        ></Input>
      </InputSection>
      <InputSection>
        <Label>Content</Label>
        <textarea
          className="border-2 border-purple-700 bg-purple-100 p-1"
          placeholder="Write your article"
          id="content"
          type="text"
          value={articleData?.content ?? ""}
          onChange={(e) => handleChange(e)}
        ></textarea>
      </InputSection>
      <Button onClick={() => submit()} name="Publish Article" primary />
      <ErrorMessage errorMessage={errorMessage} />
    </Form>
  )
}

export default ArticleForm
