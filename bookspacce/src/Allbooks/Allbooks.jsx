import React from "react";
import "./Allbooks.css";
import border from "./border.png";
import play from '../assets/play.jpg'
import curse from "../assets/curse.jpg";
import ballad from "../assets/ballad.jpg";
import summer3 from "../assets/summer3.jpg";
import { useState, useRef, useEffect } from "react";
import { allbooks } from "../assets/assets";

const Allbooks = () => {

    const booksRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [viewall, setViewall] = useState(false);

 useEffect(() => {
    const handleScroll = () => {
      if (booksRef.current) {
        const rect = booksRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight - 100) {
          setVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="allbooks-container">
      <h1 className="allbooks-heading">All Books</h1>
      <div className="allbooks">
        <div className="left-allbooks">
          <div className="left-text">
            A little archive of stories that stayed long after the last page.
            Some made me cry, some made me feel like sunshine, and some quietly
            became a part of who I am. These aren’t just books — they’re
            bookmarked moments, late-night emotions, and soft memories I carry
            with me.
          </div>
          <div className="button">
            <button className="view-all" onClick={() => setViewall(!viewall)}>
              {viewall ? "View all" : "View all"}
            </button>
          </div>
        </div>
        <div className="right-allbooks">
          <div className={`books ${visible ? 'books-visible' : ''}`} ref= {booksRef}>
            <div className="book-card">
              <img src={play} alt="" className="cover" />
            </div>
            <div className="book-card">
              <img src={summer3} alt="" className="cover" />
            </div>
            <div className="book-card">
              <img src={ballad} alt="" className="cover" />
            </div>
          </div>
        </div>
      </div>

    {viewall && (
  <div className="overlay" onClick={() => setViewall(false)}>
    <div className="allbooks-view" onClick={(e) => e.stopPropagation()}>
      <div className="all-books">
        {allbooks.map((items, index) => (
          <div className="each-book" key={index}>
            <img src={items.aimage} alt={`Book ${index}`} className="all-book" />
          </div>
        ))}
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Allbooks;
