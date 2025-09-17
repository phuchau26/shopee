import React from 'react'

const Element = (props) => {
  return (
    <div className='banner__element'>
        <img src={props.url} alt="" />
        <p>{props.title}</p>
    </div>
   
  )
}

export default Element
