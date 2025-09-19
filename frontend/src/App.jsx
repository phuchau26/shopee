import Header from './components/Header/Header.jsx'
import Category from './components/Category/Category.jsx'
import Flash from './components/Flash/Flash.jsx'
import Advertisement from './components/Advertisement/Advertisement.jsx'
import Top from './components/Top/Top.jsx'
import Today from './components/Today/Today.jsx'
import Helper from './components/Helper/Helper.jsx'
import './App.css'
import { useState, useEffect } from 'react'


function App() {

  const [productBuffer, setProductBuffer] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      fetch("https://shopee-rho-beryl.vercel.app/admin") // gọi backend local
      .then((res) => res.json())
      .then((data) => setProductBuffer(data.data))

    } catch (error) {
      console.log("Lỗi khi truy xuất products: ", error)
    }
  }

  return (
    <>
      <Header/>
      <Helper/>
       <div className="body">
          <Category/>
          <Flash/>
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

export default App
