import Header from './components/Header/Header.jsx'
import Banner from './components/Banner/Banner.jsx'
import DealHot from './components/DealHot/DealHot.jsx'
import './App.css'


function App() {

  return (
    <>
      <Header/>
       <div className='inner-mid'>
          <Banner/>
          <DealHot/>
       </div>
    </>

  )
}

export default App
