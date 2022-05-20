import { useUserContext } from "contexts/UserContext"
import React from "react"
import { Link } from "react-router-dom"
import SearchArea from "widgets/grouped/SearchArea"
import AppLogo from "widgets/text/AppLogo"
import UserArea from "widgets/grouped/UserArea"

const NavigationMenu = () => {
  const { isUserLoggedIn } = useUserContext()

  const displaySignUpOrSignOutLink = () => {
    if (!isUserLoggedIn) {
      return <Link to="connection">Log In</Link>
    } else return <UserArea />
  }

  return (
    <nav>
      <ul className="grid  grid-rows-1 grid-cols-3 gap-x-3">
        <li>
          <AppLogo />
        </li>
        <li>
          <SearchArea />
        </li>
        <li>
          <section className="flex justify-end">
            {displaySignUpOrSignOutLink()}
          </section>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationMenu
