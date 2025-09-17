import React from 'react'
import "./Element.css"

const Element = (props) => {
  return (
    <div>
      <li>{props.name}</li>
    </div>
  )
}

export default Element
