import React from 'react'
import {useState, useEffect} from 'react'
import Header from '../../components/Header/Header'
import Detail from '../../components/Detail/Detail'


const Product = () => {

  const [productBuffer, setProductBuffer] = useState({})
  
    useEffect(() => {
      fetchProducts()
    }, [])
  
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://shopee-rho-beryl.vercel.app/product')
  
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
    <div>
        <Header/>
        <div className="body">
          <Detail data={productBuffer}/>
       </div>

        <div className="copyright">
          © Copyright by HCMUS-HauProMax
        </div>
    </div>
  )
}

export default Product
