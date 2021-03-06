import PropTypes from "prop-types"
import React, { useContext } from "react"

const UserContext = React.createContext()

export const useUserContext = () => {
  return useContext(UserContext)
}

const UserProvider = ({ children }) => {
  const isUserLoggedIn = !!sessionStorage.getItem("token")
  const username = sessionStorage.getItem("username")

  return (
    <UserContext.Provider value={{ isUserLoggedIn, username }}>
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.any,
}

export default UserProvider
