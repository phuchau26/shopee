import React from 'react';
import './Payment.css';
import {useState, useEffect} from 'react'

const Payment = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  // đặt thời gian ban đầu (ví dụ 2 giờ = 7200 giây)
    const [timeLeft, setTimeLeft] = useState(1.5 * 60);

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
    <div className="payment-overlay">
      <div className="payment-container">
        <button className="payment-close" onClick={onClose}>×</button>
        <h2>Xác nhận thanh toán</h2>
        <div className='uudai'>
          <p>Bạn vui lòng thanh toán trước </p>
            <span>
              <div className="countDown">
                <span>{h}</span>
                <span>{m}</span>
                <span>{s}</span>
              </div>
            </span>
            <p>để được áp dụng ưu đãi !!!</p>
        </div>
        <img src="/qr.png" alt="" />
        <p id='content'>{"Nội dung chuyển khoản: [Mã đơn hàng] – [Họ tên người nhận] – [Số điện thoại]"}</p>
        <p id='vidu'>Ví dụ: DH0925 – Nguyễn Phúc Hậu – 0901234567</p>
        <div id="luuy">* Lưu ý: Vui lòng kiểm tra chính xác số tiền thanh toán và nội dung ghi chú. Mọi giao dịch sai lệch sẽ không được hoàn trả.</div>
        <div className='button'>
          <button id='buy' onClick={onConfirm}>Xác nhận</button>
          <button id='cancel' onClick={onClose}>Hủy</button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
