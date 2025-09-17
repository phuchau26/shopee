import React from 'react'

const Element = (props) => {
  return (
    <div className='TodayItem'>
        <span className='discount'>-{props.discount}%</span>
        <div className='image'>
            <img className='image__help' src="https://down-vn.img.susercontent.com/file/vn-11134258-820l4-mefkxpuaf01y53" alt="" />
            <img className='image__product' src={props.url} alt="" />
        </div>

        
        <p>
            <img className='mall' src="https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lyb3kdam2qw17d" alt="" />
            {props.name}
        </p>
        <div className='last'>
            <span className='price'>{props.price}</span>
            <span className='sale'>Đã bán {props.sale}k+</span>
        </div>
    </div>
  )
}

export default Element
