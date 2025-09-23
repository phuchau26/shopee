import Header from '../../components/Header/Header.jsx'
import Category from '../../components/Category/Category.jsx'
import Flash from '../../components/Flash/Flash.jsx'
import Advertisement from '../../components/Advertisement/Advertisement.jsx'
import Top from '../../components/Top/Top.jsx'
import Today from '../../components/Today/Today.jsx'
import Helper from '../../components/Helper/Helper.jsx'
import "../../App.css"
import { useState, useEffect } from 'react'


function Home() {

  const [productBuffer, setProductBuffer] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      // const response = await fetch('http://localhost:5001/admin')
      const response = await fetch('https://shopee-rho-beryl.vercel.app/admin')

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      setProductBuffer(data) // lưu dữ liệu vào state
    } catch (error) {
      console.error("Lỗi khi truy xuất products: ", error)
    }
  }

  return (
    <>
      <Header/>
      <Helper/>
       <div className="body">
          <Category/>
          <Flash product={productBuffer}/>
          <Advertisement/>
          <Top/>
          <Today productList={productBuffer}/>
       </div>

        <div className="copyright">
          © Copyright by HCMUS-HauProMax
        </div>
    </>

  )
}

export default Home
