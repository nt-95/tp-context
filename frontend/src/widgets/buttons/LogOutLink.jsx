import React from "react"
import { Link } from "react-router-dom"

const LogOutLink = () => {
  const handleLogOut = () => {
    sessionStorage.removeItem("token")
    window.location.reload()
  }

  return (
    <Link to="/" onClick={() => handleLogOut()}>
      Sign Out
    </Link>
  )
}

export default LogOutLink
