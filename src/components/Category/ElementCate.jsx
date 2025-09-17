import React from 'react'
import "./Element.css"

const Element = (props) => {
  return (
    <div className='CateElement'>
        <img src={props.url} alt="" />
        <p>{props.title}</p>
    </div>
   
  )
}

export default Element
