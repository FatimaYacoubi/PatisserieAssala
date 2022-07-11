import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Carousel } from 'react-responsive-carousel';
import background  from './Components/background.png'
import { UserCard } from 'react-ui-cards'; 
import { Container, Row, Col } from 'react-grid-system';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import InfoSection from './Components/InfoSection';
import Services from './Components/services';
import Footer from './Components/Footer';
import { homeObjOne, homeObjthree, homeObjtwo } from './Components/InfoSection/Data';
import { Button } from './Components/Button';
import InfoSection2 from './Components/InfoSection/Index1';
import BestSellers from './Components/BestSellers';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Carousel>
                <div>
                    <img src={background} />
                </div>
                <div>
                    <img src={background} />
                </div>
                <div>
                    <img src={background} />
                </div>
            </Carousel>
           
 <br></br>
 <br></br>
 <br></br>
<InfoSection {...homeObjOne}/> 
<InfoSection2 {...homeObjtwo}/> 
<InfoSection {...homeObjthree}/> 
<Services />
<InfoSection {...homeObjOne}/> 

< BestSellers />

<Footer />
    </div>
  ); }


export default App;
