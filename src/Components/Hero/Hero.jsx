import React from 'react'
import './Hero.css'
import dark_arrow from "../../assets/dark-arrow.png"

const Hero = () => {
    console.log("Hero component is rendering")
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We ensure better education for a better world</h1>
        <p>Our cutting-edge curriculum is designed empower students with the knowledge, skills and experiences needed in the dynamic field od education.</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="Arrow Symbol" /></button>
      </div>
    </div>
  );
}

export default Hero