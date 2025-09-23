import React from 'react'
import "./Flash.css"
import Item from './Item'
import {useState, useEffect} from 'react'


const Flash = (props) => {
    //Lấy 6 phần tử đầu tiên của props.product
    const list = props.product.slice(0, 6);

    // đặt thời gian ban đầu (ví dụ 2 giờ = 7200 giây)
    const [timeLeft, setTimeLeft] = useState(2 * 60 * 60);

    useEffect(() => {
        const timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer); // cleanup khi unmount
    }, []);

    // format giây -> hh:mm:ss
    const formatTime = (seconds) => {
        const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
        const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
        const s = String(seconds % 60).padStart(2, "0");
        return { h, m, s };
    };

    const { h, m, s } = formatTime(timeLeft);

  return (
    <div className='innerFlash'>
      <div className='element__1'>
        <div className='element__1--com'>
            <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/5112f196d53068a0c14b.png" alt="" />
            <div className="countDown">
                <span>{h}</span>
                <span>{m}</span>
                <span>{s}</span>
            </div>
        </div>

        <p>{"Xem tất cả >"}</p>
      </div>

      <div className="element__2">
        {
            list.map((item, index) => (
                <Item url={item.url} price={item.price} discount={item.discount} key={index} id={item._id}/>
            ))
        }
      </div>
    </div>
  )
}

export default Flash
