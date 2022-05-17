import React, { useState } from "react"
import ConnectionForm from "widgets/forms/ConnectionForm"
import Button from "widgets/buttons/Button"
import SignUpForm from "widgets/forms/SignUpForm"
import Title from "widgets/text/Title"
import PageLayout from "layouts/PageLayout"

const ConnectionPage = () => {
  const [signup, setSignup] = useState(false)

  const getContent = () => {
    if (signup) {
      return (
        <>
          <Title>Create a new account</Title>
          <SignUpForm />
          <section className="my-3">
            <p>Do you want to log in instead ? </p>
            <Button
              onClick={() => setSignup(false)}
              name="I already have an account"
            />
          </section>
        </>
      )
    }
    return (
      <>
        <Title>Log in to your account</Title>
        <ConnectionForm />
        <section className="my-3">
          <p>No account ? </p>
          <Button onClick={() => setSignup(true)} name={"Sign Up"} />
        </section>
      </>
    )
  }

  return (
    <PageLayout>
      <div className="border-2 border-purple-700 p-6 mt-8 bg-white w-96">
        {getContent()}
      </div>
    </PageLayout>
  )
}

export default ConnectionPage
