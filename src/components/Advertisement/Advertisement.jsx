import React from 'react'
import "./Advertisement.css"
import { IoArrowBackCircle } from "react-icons/io5";
import { RiShieldCheckFill } from "react-icons/ri";
import { FaTruckFast } from "react-icons/fa6";
import { FaChevronCircleRight } from "react-icons/fa";
import Item from './Item';

const Advertisement = () => {

    const listAd = [
        {
            url: "https://down-vn.img.susercontent.com/file/vn-50009109-b71e5e73e9d5705a0eba35f0d03c33c6@resize_w201_nl.webp",
            desc: "Giảm đến 50%"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/vn-11134258-7ra0g-m6glb2udrprs42@resize_w201_nl.webp",
            desc: "Mua 1 tặng 1"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lx6pdo1qwogrf1@resize_w201_nl.webp",
            desc: "Mua 1 được 2"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/be40023a9d9cff397a470460bc7a924d@resize_w201_nl.webp",
            desc: "Deli siêu sale"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/vn-50009109-7e80ab64bdc989f5c0862ed828f343a2@resize_w201_nl.webp",
            desc: "Ưu đãi đến 50%"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/5fb3f7b359a582f322ea39313e10260b@resize_w201_nl.webp",
            desc: "Mua 1 tặng 1"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/vn-11134258-7ras8-m4ycyi0ypc5414@resize_w201_nl.webp",
            desc: "Mua 1 tặng 1"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/vn-50009109-7ce7d5800afb2b6c80a7242236ec7409@resize_w201_nl.webp",
            desc: "Mua là có quà"
        },
    ]


  return (
    <div className='Advertisement'>
      <div className="element__1">
        <div className="qc">
            <span>shopee mall</span>
            <ul>
                <li>
                    <IoArrowBackCircle className='icon'/>
                    trả hàng miễn phí 15 ngày
                </li>
                <li>
                    <RiShieldCheckFill className='icon'/>
                    hàng chính hãng 100%
                </li>

                <li>
                    <FaTruckFast className='icon'/>
                    miễn phí vận chuyển
                </li>
            </ul>
        </div>

        <span>xem tất cả <FaChevronCircleRight id='right'/></span>
        

      </div>

      <div className="element__2">
        <div className="banner">
            <img src="./ad-4.png" alt="" />
        </div>

        <div className="categoryAd">
            {
                listAd.map((item) => (
                    <Item url={item.url} desc={item.desc}/>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Advertisement
