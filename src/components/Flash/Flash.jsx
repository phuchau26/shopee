import React from 'react'
import "./Flash.css"
import Item from './Item'


const Flash = () => {
    const list = [
        {
            url: "https://down-vn.img.susercontent.com/file/cn-11134207-7ras8-m84gpopqji8td2_tn",
            price: "84.700",
            discount: 45
        },
        {
            url: "https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m9zsat7xhi562f_tn",
            price: "14.900",
            discount: 28
        },
        {
            url: "https://down-vn.img.susercontent.com/file/sg-11134301-7ratq-ma2bk1hy6jx849_tn",
            price: "42.500",
            discount: 46
        },
        {
            url: "https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m9zmtw4ti8ucfa_tn",
            price: "20.900",
            discount: 19
        },
        {
            url: "https://down-vn.img.susercontent.com/file/sg-11134201-7rd5t-m7tb31jnn95g73_tn",
            price: "29.900",
            discount: 60
        },
        {
            url: "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mefa4cy7tlabb7_tn",
            price: "68.000",
            discount: 52
        },
    ]

  return (
    <div className='innerFlash'>
      <div className='element__1'>
        <div className='element__1--com'>
            <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/5112f196d53068a0c14b.png" alt="" />
            <div className="countDown">
                <span>00</span>
                <span>33</span>
                <span>23</span>
            </div>
        </div>

        <p>{"Xem tất cả >"}</p>
      </div>

      <div className="element__2">
        {
            list.map((item) => (
                <Item url={item.url} price={item.price} discount={item.discount}/>
            ))
        }
      </div>
    </div>
  )
}

export default Flash
