import Header from './components/Header/Header.jsx'
import Banner from './components/Banner/Banner.jsx'
import DealHot from './components/DealHot/DealHot.jsx'
import Category from './components/Category/Category.jsx'
import Flash from './components/Flash/Flash.jsx'
import Advertisement from './components/Advertisement/Advertisement.jsx'
import Top from './components/Top/Top.jsx'
import Today from './components/Today/Today.jsx'
import './App.css'


function App() {

  return (
    <>
      <Header/>
       <div className='inner-mid'>
          
       </div>

       <div className="body">
          <Banner/>
          <DealHot/>
          <Category/>
          <Flash/>
          <Advertisement/>
          <Top/>
          <Today/>
       </div>

        <div className="copyright">
          © Copyright by HCMUS-HauProMax
        </div>
    </>

  )
}

export default App
