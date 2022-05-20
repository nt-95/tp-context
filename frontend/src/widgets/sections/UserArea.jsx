import { useUserContext } from "contexts/UserContext"
import React from "react"
import LogOutLink from "widgets/buttons/LogOutLink"

const UserArea = () => {
  const { username } = useUserContext()
  return (
    <>
      <span className="text-white mr-6 font-bold">{username}</span>
      <LogOutLink />
    </>
  )
}

export default UserArea
