import React, { useState } from "react"
import Button from "widgets/buttons/Button"
import Label from "widgets/forms/Label"
import Form from "widgets/forms/Form"
import InputSection from "widgets/forms/InputSection"
import Input from "widgets/forms/Input"
import ErrorMessage from "widgets/text/ErrorMessage"

const ConnectionForm = () => {
  const [userData, setUserData] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const submit = () => {
    if (!userData.username || !userData.password) {
      setErrorMessage("Error: Please fill in all the fields")
      return
    }
    const nameRegex = /^[0-9a-zA-Z\_]+$/
    const validUsername = userData.username.match(nameRegex)
    if (!validUsername) {
      setErrorMessage(
        "Error: Your username must only contain characters A-Z, a-z, 0-9 and '_'"
      )
      return
    }
    fetchUser()
  }

  const fetchUser = async () => {
    const headers = new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${btoa(userData?.username + userData?.password)}`,
    })

    try {
      const response = await fetch(
        `http://localhost:2345/index.php/user/connect`,
        {
          method: "POST",
          headers: headers,
          mode: "cors",
          credentials: "include",
        }
      )
      if (response.status >= 200 && response.status <= 299) {
        const data = await response.json()
        sessionStorage.setItem("token", data?.token)
        sessionStorage.setItem("username", data?.username)
        setErrorMessage("")
        window.location.reload()
      } else {
        setErrorMessage(response.statusText)
        throw new Error(response.statusText)
      }
    } catch (err) {
      setErrorMessage(err.toString())
    }
  }

  const handleChange = (e) => {
    setErrorMessage("")
    setUserData({ ...userData, [e.target.id]: e.target.value })
  }

  return (
    <Form>
      <InputSection>
        <Label>Username</Label>
        <Input
          placeholder="Enter username"
          id="username"
          type="text"
          onChange={(e) => handleChange(e)}
        ></Input>
      </InputSection>
      <InputSection>
        <Label>Password</Label>
        <Input
          placeholder="Enter password"
          id="password"
          type="password"
          onChange={(e) => handleChange(e)}
        ></Input>
      </InputSection>
      <Button onClick={() => submit()} name="Connect" primary />
      <ErrorMessage errorMessage={errorMessage} />
    </Form>
  )
}

export default ConnectionForm
