import React, { useEffect, useRef, useState } from 'react'
import './About.css'
import anjj from './anjj.jpg'
import flower1 from './flower1.png'
import flower2 from './flower2.png'

const About = () => {

    const heyref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handlescroll = () => {
            const rect = heyref.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if(rect.top <=windowHeight-100){
                setVisible(true);
            }

        }

        window.addEventListener('scroll', handlescroll);
        handlescroll();

        return () => window.removeEventListener('scroll', handlescroll);
    }, [])
  return (
    <div className='about-page'>
        <div className="about-container">
            <div className="left-about">
                <img src={anjj} alt="" className="anjj" />
                <img src={flower1} alt="" className="flower1" />
                <img src={flower2} alt="" className="flower2" />
            </div>
            <div className="right-about">
                <h3 
                ref = {heyref}
                className={`hey ${visible ? 'fade-in' : ''}`}>Hey its me</h3>
                <p className="about-me">
                    Welcome to my cozy corner of the internet, where stories come alive and five-star reads steal hearts. I’m just a girl who believes in late-night chapters, emotionally attached bookmarks, and the kind of books that feel like home. This space is a collection of everything I love — bookish thoughts, honest reviews, and the little moments that only readers understand. Whether you’re here for a recommendation or just to swoon over fictional characters with me, you’re already part of the story. 
                    
                </p>
            </div>
        </div>
      
    </div>
  )
}

export default About
