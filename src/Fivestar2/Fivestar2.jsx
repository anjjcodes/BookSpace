import React, { useState } from 'react'
import './Fivestar2.css'
import pretty from './prettybooks.png'
import { fivestar_list } from '../assets/assets'
import stars from './stars.png'
import aesthbook from './prettybooks.png'
import blue from './blueflower.png'
import pink from './pinkflower.png'
import border from './border.png'
const Fivestar2 = () => {
  const [showfivestar, setShowfivestar] = useState(false);


  return (
    <div className="entire-five">
        <div className='fivestar-cont'>
        <img src={border} alt="" className="border" />
        <div className="five-left">
          <img src={blue} alt="" className="blue" />
          <img src={aesthbook} alt="" className="aesth-book" />
          <img src={pink} alt="" className="pink" />
        </div>
        <div className="five-right">
          <h1 className="five-star">Five-Star Reads</h1>
          <p className="body-five">A little archive of stories that stayed long after the last page. Some made me cry, some made me feel like sunshine, and some quietly became a part of who I am. These aren’t just books — they’re bookmarked moments, late-night emotions, and soft memories I carry with me.</p>
          <button className="click5" 
          onClick={ () => setShowfivestar(!showfivestar)}>
            See books close to my heart
          </button>
        </div>

      </div>

      {showfivestar && (
        <div className="overlay" onClick={() => setShowfivestar(false)}>
          <div className="all-fivestar">
            <div className="five-books">
                  {fivestar_list.map((items, index) => {
              return(
                  <img  key={index} src={items.fimage} alt="" className="b" />
                
              )
            })}
            </div>
            
          </div>
        </div>
      )}
    </div>
      
    
  )
}

export default Fivestar2
