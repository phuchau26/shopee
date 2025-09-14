import React from 'react'
import "./Category.css"
import Element from './ElementCate'

const Category = () => {

    const listCategory = [
        {
            url: "https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b",
            title: "thời trang nam"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca",
            title: "điện thoại & phụ kiện"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5",
            title: "thiết bị điện tử"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d",
            title: "máy tính & laptop"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d",
            title: "máy ảnh & máy quay phim"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260",
            title: "đồng hồ"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/74ca517e1fa74dc4d974e5d03c3139de",
            title: "giày dép nam"
        },

        {
            url: "https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857",
            title: "thiết bị điện gia dụng"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/6cb7e633f8b63757463b676bd19a50e4",
            title: "thể thao & du lịch"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334",
            title: "ô tô & xe máy & xe đạp"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/75ea42f9eca124e9cb3cde744c060e4d",
            title: "thời trang nữ"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/099edde1ab31df35bc255912bab54a5e",
            title: "mẹ & bé"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/24b194a695ea59d384768b7b471d563f",
            title: "nhà cửa & đời sống"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/ef1f336ecc6f97b790d5aae9916dcb72",
            title: "sắc đẹp"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/49119e891a44fa135f5f6f5fd4cfc747",
            title: "sức khỏe"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/48630b7c76a7b62bc070c9e227097847",
            title: "giày dép nữ"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/fa6ada2555e8e51f369718bbc92ccc52",
            title: "túi ví nữ"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/8e71245b9659ea72c1b4e737be5cf42e",
            title: "phụ kiện & trang sức nữ"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/c432168ee788f903f1ea024487f2c889",
            title: "bách hóa online"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/36013311815c55d303b0e6c62d6a8139",
            title: "nhà sách online"
        },
    ]

  return (
    <div className='CategoryList'>
        <div className="list--1">
            <p>danh mục</p>
        </div>
        <div className='list--2'>
            {
                listCategory.map((item) => (
                    <Element url={item.url} title={item.title}/>
                ))
            }
        </div>
    </div>
  )
}

export default Category
