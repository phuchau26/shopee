import React from 'react'
import { IoFlash } from "react-icons/io5";
const Item = (props) => {
  return (
    <div className='ItemFlash'>
        <div className='discount'>
            <IoFlash />
            <span>-{props.discount}%</span>
        </div>
        <img src={props.url} alt="" />
        <span className='price'>{props.price}</span>
        <p>đang bán chạy</p>
    </div>
  )
}

export default Item
