import React from 'react'
import "./Top.css"
import Element from './Element'

const Top = () => {
    const listTop = [
        {
            url: "https://down-vn.img.susercontent.com/file/ceb20e21975cdec80ecbc7105fc18961",
            sale: 7,
            name: "trò chơi board games"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/5eb04768e43afb6adabcaee8ba0fd736",
            sale: 54,
            name: "bao cao su"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/d4e14f20fbcb6e42c2adc631536ca1c9",
            sale: 83,
            name: "áo thun"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/45f9a684f7ba254cd805476ceb95393d",
            sale: 51,
            name: "tinh dầu bưởi cocoon"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/70c0e8b31dccb810d4caa1e188d4cd8f",
            sale: 48,
            name: "bánh tráng trộn"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/9a67b555ee38eeacc8f483cad33d535c",
            sale: 56,
            name: "Kẹp tóc càng cua đơn giản nữ"
        },
    ]

  return (
    <div className='Top'>
        <div className="element__1">
            <span>tìm kiếm hàng đầu</span>
            <span id='all'>{"xem tất cả >"}</span>
        </div>

        <div className="element__2">
            {
                listTop.map((item, index) => (
                    <Element url={item.url} sale={item.sale} name={item.name} key={index}/>
                ))
            }
        </div>
    </div>
  )
}

export default Top
