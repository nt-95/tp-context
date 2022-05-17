import React from "react"
import { Link } from "react-router-dom"

const AppLogo = () => {
  return (
    <div className="bg-yellow-400 p-2 text-lg text-black font-bold rounded-lg">
      <Link to="/">IMDb</Link>
    </div>
  )
}

export default AppLogo
