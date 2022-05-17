import React from "react"
import { Link } from "react-router-dom"

const NavigationMenu = () => {
  return (
    <nav>
      <ul className="flex justify-between">
        <li className="mr-3">
          <Link to="/">Home</Link>
        </li>
        <li className="ml-3">
          <Link to="connection">Sign Up</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationMenu
