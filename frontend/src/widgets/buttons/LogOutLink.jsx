import React from "react"
import { Link } from "react-router-dom"

const LogOutLink = () => {
  const handleLogOut = () => {
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("username")
    window.location.reload()
  }

  return (
    <Link to="/" onClick={() => handleLogOut()}>
      Log Out
    </Link>
  )
}

export default LogOutLink
