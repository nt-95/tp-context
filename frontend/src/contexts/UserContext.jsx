import PropTypes from "prop-types"
import React, { useContext } from "react"

const UserContext = React.createContext()

export const useUserContext = () => {
  return useContext(UserContext)
}

const UserProvider = ({ children }) => {
  const isUserLoggedIn = !!sessionStorage.getItem("token")

  return (
    <UserContext.Provider value={{ isUserLoggedIn }}>
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.any,
}

export default UserProvider
