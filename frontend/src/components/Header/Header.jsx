import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import Element from "./Element";
import "./Header.css"
const Header = () => {
  return (
    <div className="Header">
      <div className="inner">
        <div className="list">
          <div className="list__element--1">
            <ul>
              <Element name="Kênh Người Bán" />
              <Element name="Trở thành Người Bán Shopee" />
              <Element name="Tải Ứng Dụng" />
              <li>Kết nối</li>
              <li id="logo">
                <FaFacebook />
                <FaInstagram />
              </li>
            </ul>
          </div>
          <div className="list__element--2">
            <ul>
              <Element name="Thông Báo" />
              <Element name="Hỗ Trợ" />
              <Element name="Đăng Ký" />
              <Element name="Đăng Nhập" />
            </ul>
          </div>
        </div>
  
        <div className="shop">
          <div className="shop__left">
            <a href="./"><img src="./Shopee.png" alt=""/></a>
          </div>
          <div className="shop__mid">
            <div className="inner">
              <div>
                <input type="text" placeholder="Shopii bao ship 0Đ - Đăng kí ngay!"/>
                <button>
                    <IoIosSearch />
                </button>
              </div>

            </div>
          </div>
          <div className="shop__right">
            <LuShoppingCart className="cart"/>
          </div>
        </div>

        <div className="cate">
            <ul>
              <Element name="Áo Khoác Hot"/>
              <Element name="Quạt Điện Cầm Tay"/>
              <Element name="Pin Trâu"/>
              <Element name="Romand Juicy 24"/>
              <Element name="Dép Sale 1k"/>
              <Element name="Điện Thoại"/>
              <Element name="Iphone"/>
              <Element name="Váy đẹp"/>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
