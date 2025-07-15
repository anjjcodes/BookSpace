import React, { useEffect, useState } from 'react'
import './Home.css'

const Home = () => {

    const [animatefirst, setAnimatefirst] = useState(false);
    const [animatesecond, setAnimatesecond] = useState(false);

    useEffect(() => {
        setTimeout(() => setAnimatefirst(true), 100);
        setTimeout(()=> setAnimatesecond(true), 200);
    })
  return (
    <div className='page'>
        <div className="container">
            <div className="header">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#allbooks">All Books</a></li>
                    <li><a href="#fivestar">Five-Star Reads</a></li>
                    <li><a href="#tbrlist">TBR List</a></li>
                </ul>
            </div>
            <div className="main-heading">
                <p className={`welcome ${animatefirst ? 'fade-in' : ''}`}>Welcome to my</p>
                <h1 className={`bookspace ${animatesecond ? 'fade-in' : ''}`}>BOOKSPACE</h1>
            </div>
        </div>
      
    </div>
  )
}

export default Home
