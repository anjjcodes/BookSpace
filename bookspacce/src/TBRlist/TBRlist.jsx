import React, { useState } from 'react'
import './TBRlist.css'
import shop from './boookshop.png'
import blue from './blue.png'
import heart from './heart.png'
import { tbrlist } from '../assets/assets'

const TBRlist = () => {

    const [showtbr , setShowtbr] = useState(false);
  return (
   
        <div className="tbr">
            
            <h1 className='tbr-h1'>Tbr List</h1>
            
            <div className="tbr-container">
                <img src={heart} alt="" className="heart" />
                <div className="left">
                    <p className="tbr-p">
                        I always feel like reading every single book in the world. i just want to go through every fantasy that’s ever been written. and when i see pretty book covers, i literally can’t stop myself.
                        I know i still have a long way to go, so i’ve tried to be realistic this time and kept my tbr a bit smaller
                    </p>
                    <button className='click'
                    onClick={() => setShowtbr(!showtbr)}>Check out my Tbr list here</button>
                </div>
                <div className="right">
                    <img src={shop} alt="" className="book-shop" />
                    
                </div>
        </div>

        {showtbr && (
            <div className="overlay" onClick={()=> setShowtbr(false)}>
                <div className="tbr-box">
                    <div className="view-tbr">
                {tbrlist.map((items,index) => {
                    return (
                            <img src={items.timage} alt="" className="each-tbr" />
                    )
                    
                })}
            </div>
                </div>
                 
            </div>
           
        )}

        </div>
        
      
    
  )
}

export default TBRlist
