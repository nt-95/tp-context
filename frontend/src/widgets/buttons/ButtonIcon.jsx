import React from "react"

const ButtonIcon = ({ icon, onClick }) => {
  return (
    <button onClick={onClick}>
      <span className="h-24 w-24">{icon}</span>
    </button>
  )
}

export default ButtonIcon
