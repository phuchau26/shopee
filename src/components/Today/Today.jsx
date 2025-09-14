import React from 'react'
import Element from './Element'
import "./Today.css"

const Today = () => {
  const listItem = [
    {
      discount: 54,
      url: "https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m9b0br7elh0u7e_tn.webp",
      name: "Quạt Cầm Tay Mini DIDOOGLT Màn Hình Led Thông Minh Sạc Nhanh Tốc Độ Gió Siêu Mạnh",
      price: "82.000",
      sale: 40
    },
    {
      discount: 12,
      url: "https://down-vn.img.susercontent.com/file/sg-11134253-7ra30-mbg32wvyimjra0_tn.webp",
      name: "Sữa bột ensure abbott vanilla 850g nội địa Úc hương vani giàu dinh dưỡng hộp 850g - quà tặng mẹ",
      price: "1.184.000",
      sale: 10
    },
    {
      discount: 41,
      url: "https://down-vn.img.susercontent.com/file/f746e74077549fff0e187c94c653ab76_tn.webp",
      name: "Dụng Cụ Sửa Chữa Đa Năng 46 Chi Tiết-Bộ Tovit Bỏ Túi Nhỏ Gọn Tháo Sửa Điện Thoại Laptop 24 Đầu Kèm Bao Da",
      price: "34.999",
      sale: 20
    },
    {
      discount: 44,
      url: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m4mo7dcabw1z36_tn.webp",
      name: "Phụ Kiện Tóc Cho Bé Kuromi Hộp Quà Tặng Bộ Bé Gái Quà Tặng Sinh Nhật Công Chúa Dễ Thương Kẹp Tóc Trẻ Em Hoạt Hình KèmHộp",
      price: "44.900",
      sale: 10
    },
    {
      discount: 41,
      url: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lwjs5b85ume3a1_tn.webp",
      name: "Tai Nghe Bluetooth Pro 13 Nhét Tai Không Dây Cảm Ứng Chạm Chống Ồn Âm Thanh Tuyệt Đỉnh",
      price: "59.000",
      sale: 10
    },
    {
      discount: 45,
      url: "https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m81bt217x5664b_tn.webp",
      name: "Sét bộ áo thun chất bozip kèm quần dài chất da cá SÉT BỘ DA CÁ siêu xinh phong cách Hàn Quốc M5528",
      price: "33.000",
      sale: 6
    },
    {
      discount: 50,
      url: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-mbdqoj21kxq9cc_tn.webp",
      name: "Áo Phông Nam Cánh Chim BURLONG Hàng Cao Cấp In Kín Cổ-Áo Thun Chim Đại Bàng Hot Hit 2025",
      price: "12.000",
      sale: 7
    },
    {
      discount: 28,
      url: "https://down-vn.img.susercontent.com/file/sg-11134253-7rdx1-mbo059h13svp6d_tn.webp",
      name: "LOẠI XỊN 12 Vị - 500Gr Kẹo Ngậm Trái Cây, Kẹo Ngậm Mini Thơm Miệng Mát Lạnh Bạc Hà XiaoKeAoLa",
      price: "18.000",
      sale: 6
    },
    {
      discount: 48,
      url: "https://down-vn.img.susercontent.com/file/sg-11134253-7reo2-m8zaeit4bp0939_tn.webp",
      name: "Giày thể thao nữ đế 2 cm phối sọc siêu nhẹ Slim",
      price: "99.000",
      sale: 10
    },
    {
      discount: 40,
      url: "https://down-vn.img.susercontent.com/file/sg-11134253-7rdvm-mdpm1a16jbbtb6_tn.webp",
      name: "Kệ Sách 4 Ngăn 2 Tầng Màu Trơn Để Bàn Học,Đựng Đồ Trang Trí Decor Bàn Học - Giá Khay Kệ Đựng Tài Liệu Văn Phòng Đựng Bút",
      price: "18.000",
      sale: 3
    },
    {
      discount: 18,
      url: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lud0l0s9311t4d_tn.webp",
      name: "Bình Giữ Nhiệt Nắp Kim Cương Inox 304 chân không 2 Lớp",
      price: "10.000",
      sale: 10
    },
    {
      discount: 46,
      url: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1kicjq7kqf398_tn.webp",
      name: "Dép lê nam nữ casu luofu 3 màu đúc liền nguyên khối êm nhẹ dễ đi combo 3 màu siêu bền chống nước chống trơn trượt HM048",
      price: "27.000",
      sale: 10
    },
    
  ]
  return (
    <div className='TodayMain'>
        <div className='Today'>
            <div className="element__1">gợi ý hôm nay</div>
        </div>
    
        <div className="element__2">
            {
              listItem.map((item) => (
                <Element discount={item.discount} url={item.url} price={item.price} sale={item.sale} name={item.name}/>
              ))
            }
        </div>
    </div>
  )
}

export default Today
