import logo from './logo.svg';
import './App.css';
import "react-widgets/styles.css";
import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Carousel } from 'react-responsive-carousel';
import background  from './Components/background2.png'
import { UserCard } from 'react-ui-cards'; 
import { Container, Row, Col } from 'react-grid-system';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import InfoSection from './Components/InfoSection';
import Services from './Components/services';
import Footer from './Components/Footer';
import { homeObjfour, homeObjOne, homeObjthree, homeObjtwo } from './Components/InfoSection/Data';
import { Button } from './Components/Button';
import InfoSection2 from './Components/InfoSection/Index1';
import BestSellers from './Components/BestSellers';
import InstagramEmbed from './Components/InstagramEmbed';
import Quote from './Components/Quote';
import VideoCarousel from './Components/VideoCarousel/VideoCarousel';
import HeroSection from './Components/HeroSection/HeroSection';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Evenements from './Components/Evenements';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
<InfoSection {...homeObjOne}/> 
<InfoSection2 {...homeObjtwo}/> 
<InfoSection {...homeObjthree}/> 
<div className='Colored'><Services />
<InfoSection {...homeObjfour}/> 
<div style={{ backgroundColor:'#e5ded2'}}>
< BestSellers /> </div> 
< Quote />

<InstagramEmbed /></div>
<Footer />
    </div>
  ); }


export default App;
