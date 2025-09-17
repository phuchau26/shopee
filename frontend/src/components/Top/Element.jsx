import React from 'react'

const Element = (props) => {
  return (
    <div className='TopElement'>
        <img id='top' src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/rcmd/e0c263502e0e2ed069a0.png" alt="" />
        <img src={props.url} alt="" />
        <p>Bán {props.sale}k+ / tháng</p>
        <span>{props.name}</span>
    </div>
  )
}

export default Element
