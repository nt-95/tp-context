import React from "react"

const Button = ({ onClick, name, primary = false }) => {
  const primaryStyle = `rounded-lg text-yellow-400 bg-black border-2 border-yellow-400 px-2 py-1 my-4 mr-2 hover:text-black hover:bg-yellow-400`
  const secondaryStyle = `rounded-lg text-black bg-white border-2 border-black px-2 py-1 my-4 mr-2 hover:bg-yellow-400`

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
