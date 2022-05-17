import { useUserContext } from "contexts/UserContext"
import React from "react"
import { Link } from "react-router-dom"
import LogOutLink from "widgets/buttons/LogOutLink"
import SearchBar from "widgets/forms/SearchBar"
import AppLogo from "widgets/text/AppLogo"

const NavigationMenu = () => {
  const { isUserLoggedIn } = useUserContext()

  const displaySignUpOrSignOutLink = () => {
    if (!isUserLoggedIn) {
      return <Link to="connection">Sign Up</Link>
    } else return <LogOutLink />
  }

  return (
    <nav>
      <ul className="flex justify-between items-center">
        <li>
          <AppLogo />
        </li>
        <li>
          <SearchBar />
        </li>
        <li>{displaySignUpOrSignOutLink()}</li>
      </ul>
    </nav>
  )
}

export default NavigationMenu
