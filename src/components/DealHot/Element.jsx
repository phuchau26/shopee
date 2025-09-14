import React from 'react'

const Element = (props) => {
  return (
    <div className='DealElement'>
        <img src={props.url} alt="" />
        <p>{props.title}</p>
    </div>
   
  )
}

export default Element
