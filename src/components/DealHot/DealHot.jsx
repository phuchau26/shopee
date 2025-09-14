import React from 'react'
import "./DealHot.css"
import Element from './Element'

const DealHot = () => {
    const listDeal = [
        {
            url: "https://cf.shopee.vn/file/vn-11134258-820l4-mee7bqy48xl123_xhdpi",
            title: "Deal Từ 1.000Đ"
        },
        {
            url: "https://cf.shopee.vn/file/vn-50009109-8a387d78a7ad954ec489d3ef9abd60b4_xhdpi",
            title: "Mã Giảm Giá"
        },
        {
            url: "https://cf.shopee.vn/file/vn-11134258-820l4-mee7fnojx1c175_xhdpi",
            title: "Shopee Xử Lý"
        },
        {
            url: "https://cf.shopee.vn/file/vn-11134258-7ras8-mb6e1ufaxoldb9_xhdpi",
            title: "Deal Hot Giờ Vàng"
        },
        {
            url: "https://cf.shopee.vn/file/vn-50009109-c02353c969d19918c53deaa4ea15bdbe_xhdpi",
            title: "Shopee Style Voucher 30%"
        },
        {
            url: "https://cf.shopee.vn/file/1d25d74d6900b85cfde8f967e613041d_xhdpi",
            title: "Săn Ngay 100.000 Xu"
        },
        {
            url: "https://cf.shopee.vn/file/vn-50009109-f692e9b0be05d1a11cded7f9f72b5f0b_xhdpi",
            title: "Khách Hàng Thân Thiết"
        },
    
    ]


  return (
    <div className='Deal'>
      {
        listDeal.map((item) => (
            <Element url={item.url} title={item.title}/>
        ))
      }
    </div>
  )
}

export default DealHot
