import React from 'react'

const Item = (props) => {
  return (
    <div className='ItemAd'>

        <img src={props.url} alt="" />
        <span>{props.desc}</span>
    </div>
  )
}

export default Item
