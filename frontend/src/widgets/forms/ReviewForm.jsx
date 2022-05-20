import React, { useState } from "react"
import Label from "widgets/forms/Label"
import Form from "widgets/forms/Form"
import InputSection from "widgets/forms/InputSection"
import Input from "widgets/forms/Input"
import Button from "widgets/buttons/Button"
import Title from "widgets/text/Title"
import ErrorMessage from "widgets/text/ErrorMessage"
import SuccessMessage from "widgets/text/SuccessMessage"

const ReviewForm = ({ setUpdateReviewList }) => {
  const [reviewData, setReviewData] = useState({})
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  const handleChange = (e) => {
    setErrorMessage("")
    setSuccessMessage("")
    setReviewData({ ...reviewData, [e.target.id]: e.target.value })
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
          body: JSON.stringify(reviewData),
          headers: headers,
          mode: "cors",
          credentials: "include",
        }
      )
      if (response.status >= 200 && response.status <= 299) {
        const data = await response.json()
        setUpdateReviewList(Math.random() * 1000000)
        setSuccessMessage(data.message)
        setReviewData({})
      } else throw new Error(response.statusText)
    } catch (err) {
      setErrorMessage(err.toString())
      setSuccessMessage("")
    }
  }

  const submit = () => {
    if (!reviewData.title || !reviewData.content) {
      setErrorMessage("Fields can not be empty")
      return
    }
    postArticle()
  }

  return (
    <Form>
      <Title>Write a review</Title>
      <InputSection>
        <Label>Title</Label>
        <Input
          placeholder="Enter title"
          id="title"
          type="text"
          value={reviewData?.title ?? ""}
          onChange={(e) => handleChange(e)}
        ></Input>
      </InputSection>
      <InputSection>
        <Label>Content</Label>
        <textarea
          className="p-1 focus:outline-none text-black"
          placeholder="Write your review"
          id="content"
          type="text"
          value={reviewData?.content ?? ""}
          onChange={(e) => handleChange(e)}
        ></textarea>
      </InputSection>
      <Button onClick={() => submit()} name="Publish Review" primary />
      <ErrorMessage errorMessage={errorMessage} />
      <SuccessMessage successMessage={successMessage} />
    </Form>
  )
}

export default ReviewForm
