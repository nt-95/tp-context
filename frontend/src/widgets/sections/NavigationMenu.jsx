import { useUserContext } from "contexts/UserContext"
import React from "react"
import { Link } from "react-router-dom"

const NavigationMenu = () => {
  const { isUserLoggedIn } = useUserContext()

  const displaySignUpOrSignOutLink = () => {
    if (!isUserLoggedIn) {
      return <Link to="connection">Sign Up</Link>
    } else return <Link to="disconnection">Sign Out</Link>
  }

  return (
    <nav>
      <ul className="flex justify-between">
        <li className="mr-3">
          <Link to="/">Home</Link>
        </li>
        <li className="ml-3">{displaySignUpOrSignOutLink()}</li>
      </ul>
    </nav>
  )
}

export default NavigationMenu
