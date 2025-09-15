import Header from './components/Header/Header.jsx'
import Category from './components/Category/Category.jsx'
import Flash from './components/Flash/Flash.jsx'
import Advertisement from './components/Advertisement/Advertisement.jsx'
import Top from './components/Top/Top.jsx'
import Today from './components/Today/Today.jsx'
import Helper from './components/Helper/Helper.jsx'
import './App.css'


function App() {

  return (
    <>
      <Header/>
      <Helper/>
       <div className="body">
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
