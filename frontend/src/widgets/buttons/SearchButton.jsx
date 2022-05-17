import React from "react"
import MagnifierIcon from "widgets/icons/MagnifierIcon"
import ButtonIcon from "./ButtonIcon"

const SearchButton = ({ onClick }) => {
  return <ButtonIcon onClick={onClick} icon={<MagnifierIcon />} />
}

export default SearchButton
