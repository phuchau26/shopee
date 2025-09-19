import React from 'react'
import Element from './Element'
import "./Today.css"

const Today = (props) => {
  
  return (
    <div className='TodayMain'>
        <div className='Today'>
            <div className="element__1">gợi ý hôm nay</div>
        </div>
    
        <div className="element__2">
            {
              props.productList.map((item, index) => (
                <Element discount={item.discount} url={item.url} price={item.price} sale={item.sale} name={item.name} key={index}/>
              ))
            }
        </div>
    </div>
  )
}

export default Today
