import React from "react"

const Input = ({ placeholder, id, type, onChange, value }) => {
  return (
    <input
      className={"p-1 mt-1 bg-white text-black focus:outline-none"}
      placeholder={placeholder}
      id={id}
      type={type}
      onChange={onChange}
      value={value}
    ></input>
  )
}

export default Input
