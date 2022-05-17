import React from "react"

const Button = ({ onClick, name, primary = false }) => {
  const primaryStyle = `text-white bg-purple-700 border-2 border-purple-700 px-2 py-1 my-4 mr-2 hover:text-purple-700 hover:bg-white`
  const secondaryStyle = `text-purple-700 bg-white border-2 border-purple-700 px-2 py-1 my-4 mr-2 hover:text-purple-700 hover:bg-purple-100`

  const getStyle = () => {
    if (primary) {
      return primaryStyle
    }
    return secondaryStyle
  }

  return (
    <button className={getStyle()} onClick={onClick}>
      {name}
    </button>
  )
}

export default Button
