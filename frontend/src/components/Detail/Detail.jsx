import React from 'react'
import "./Detail.css"
import Mini from '../MiniItem/Mini'
import { FaRegHeart } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import {useState, useEffect} from 'react'
import { GoShieldCheck } from "react-icons/go";
import { BsCartPlus } from "react-icons/bs";
import Payment from '../Payment/Payment';

const Detail = (props) => {

  // đặt thời gian ban đầu (ví dụ 2 giờ = 7200 giây)
    const [timeLeft, setTimeLeft] = useState(23 * 60);

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


    const [sizeIndex, setSizeIndex] = useState(null)
    const handleClickSize = (index) => {
      setSizeIndex(index)
    }

    const [colorIndex, setColorIndex] = useState(null)
    const handleClickColor = (index) => {
      setColorIndex(index)
    }

    const color = ["Đen", "Trắng", "Hồng sen", "Đỏ đô", "Kem"]

    const [quantity, setQuantity] = useState(1)
    const handleMinus = () => {
      if (quantity > 1){
        setQuantity(quantity-1)
      }
    }

    const handlePlus = () => {
      setQuantity(quantity+1)
    }

    const [showModal, setShowModal] = useState(false);

    const handleConfirm = () => {
      // Xử lý logic thanh toán ở đây
      alert('Thanh toán thành công!');
      setShowModal(false);
    };

    const listMini = [
      "https://down-vn.img.susercontent.com/file/6d6e624ea47cbafd075eb1b06c405888@resize_w82_nl.webp",
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lyyneah164rlca@resize_w82_nl.webp",
      "https://down-vn.img.susercontent.com/file/9e6ec674f7e09f3d47dfb90626e86a9f@resize_w82_nl.webp",
      "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljwdxab0756q30@resize_w82_nl.webp",
      "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljwdxab08jr6d6@resize_w82_nl.webp"
    ]
 
  return (
    <div className='detail'>
        
        <div className="detail__left">
          <img src={props.data.url} alt="" />
          <div className="detail__left--listImage">
            {
              // Array.isArray(props.data.listMini) && props.data.listMini.length > 0 &&
              // props.data.listMini.map((item, index) => (
              //   <Mini key={index} url={item} />
              // ))

             listMini.map((item, index) => (
                <Mini key={index} url={item} />
              ))
            }
          </div>
          <div className="detail__left--share">
            <div className="share">
              <p>Chia sẻ: </p>
              <img src="/icon-social-media.png" alt="" />
            </div>
            <div className="fav">
              <FaRegHeart className='heart'/>
              <p>Favorite</p>
            </div>
          </div>
        </div>
        <div className="detail__right">
          <p>
            <img className='mall' src="https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lyb3kdam2qw17d" alt="" />
            {props.data.name}
          </p>
          <div className="listInfo">
            <div className="listInfo__left">
              <div className="rate">5.0
                <div className="list">
                  <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/b1caea2bc005e0f6fd8e.svg" alt="" />
                  <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/b1caea2bc005e0f6fd8e.svg" alt="" />
                  <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/b1caea2bc005e0f6fd8e.svg" alt="" />
                  <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/b1caea2bc005e0f6fd8e.svg" alt="" />
                  <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/b1caea2bc005e0f6fd8e.svg" alt="" />
                </div>
              </div>
              <div className="feed"><span>153</span>Đánh giá</div>
              <div className="sale">Đã bán <span>12k+</span></div>
            </div>
            <div className="listInfo__right">
              <p>Tố cáo</p>
            </div>
          </div>

          <div className="flash">
            <div className="flash__title">
              <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/8eebfcdc539676df4457.svg" alt="" />
              <div className="flash__end">
                <p><CiClock2 className='clock' />kết thúc trong</p>
                <div className="countDown">
                  <span>{h}</span>
                  <span>{m}</span>
                  <span>{s}</span>
                </div>
              </div>
            </div>

            <div className="flash__price">
              <div className='price--inner'>
                <span>{props.data.price}</span>
                <div className="dong">đ</div>
              </div>
              <p>{props.data.price*2}.000 <div className="dong2">đ</div> </p>
              <div className="discount">-50%</div>
            </div>
          </div>

          <div className="shipment">
            <div className="title">
              Vận chuyển
            </div>

            <div className="shipment__info">
              <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/f1f65ec969d238ed62ff.svg" alt="" />
              <div className='date'>
                <div>Nhận từ 21 Th09 - 26 Th09</div>
                <div className='ship'>Phí ship 0đ</div>
                <div className='voucher'>Tặng Voucher 15.000đ nếu đơn giao sau thời gian trên.</div>
              </div>
            </div>
          </div>

          <div className="guaranty">
            <div className="guaranty__title">an tâm mua sắm cùng shopee</div>
            <div className="process">
              <span><GoShieldCheck id='shield'/></span>
              <span>Xử lý đơn hàng bởi Shopee</span>
              <span>Combo giảm sâu</span>
              <span>Miễn phí vận chuyển</span>
            </div>
          </div>

          <div className="size">
            <div className="size__title">Size</div>
            <div className="size__list">
              {
                [...Array(5)].map((_, index) => (

                  <div className={`size__element ${index==sizeIndex?"active":""}`}
                    onClick={() => handleClickSize(index)}
                  >
                    {`Size ${index+1}`}
                  </div>

                ))
              }
            </div>
          </div>

          <div className="color">
            <div className="color__title">Màu sắc</div>
            <div className="color__list">
              {
                color.map((item, index) => (

                  <div className={`color__element ${index==colorIndex?"active":""}`}
                    onClick={() => handleClickColor(index)}
                  >
                    {item}
                  </div>

                ))
              }
            </div>
          </div>

          <div className="quantity">
            <div className="quantity__title">Số Lượng</div>
            <div className="quantity__adjust">
              <button className='minus' onClick={handleMinus} disabled={quantity === 1}>-</button>
              <input type="number" value={quantity}/>
              <button className='plus' onClick={handlePlus}>+</button>
            </div>
          </div>

          <div className="buy">
            <button id='addCart'><BsCartPlus id='cart'/> thêm vào giỏ hàng</button>
            <button id='buy' onClick={() => setShowModal(true)}>Mua ngay</button>
            <Payment
              show={showModal}
              onClose={() => setShowModal(false)}
              onConfirm={handleConfirm}
            />

          </div>
              
        </div>
      
    </div>
  )
}

export default Detail
