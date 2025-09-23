import React from 'react';
import { IoFlash } from "react-icons/io5";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <Link to={`/product/${props.id}`} className='ItemFlash'>
      <div className='discount'>
        <IoFlash />
        <span>-{props.discount}%</span>
      </div>
      <img src={props.url} alt={props.name} />
      <span className='price'>{props.price}</span>
      <p>đang bán chạy</p>
    </Link>
  );
};

export default Item;
