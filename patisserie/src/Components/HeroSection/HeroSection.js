import { Button } from "../Button"
import React from 'react'
import video from "../Carousel.mp4"
import logo from '../logo2.png'
import './HeroSection.css';
function HeroSection() {
  return (
    <div className='hero-container'>
        <video src={video} autoPlay loop muted />
        <img src={logo}></img>
    <h1> DECOUVREZ NOS DELICES 
    </h1>
    <p> Une grande selection de la patisserie traditionelle tunisienne</p>
    <div className="hero-btns">
    <Button> commandez</Button>
    </div> </div>
  )
}

export default HeroSection