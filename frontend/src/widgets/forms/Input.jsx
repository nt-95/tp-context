import React from "react"

const Input = ({ placeholder, id, type, onChange, value }) => {
  return (
    <input
      className={
        "border-purple-700 border-2 p-1 mt-1 bg-purple-100 placeholder-purple-400"
      }
      placeholder={placeholder}
      id={id}
      type={type}
      onChange={onChange}
      value={value}
    ></input>
  )
}

export default Input
