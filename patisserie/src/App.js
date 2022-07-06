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
import { homeObjOne, homeObjthree, homeObjtwo } from './Components/InfoSection/Data';
import { Button } from './Components/Button';
import InfoSection2 from './Components/InfoSection/Index1';

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
            <Container>
            <Row>
    <Col sm={4}>
            <UserCard
    float
    header={background} 
    name='Kaak warka'
    positionName='Software Engineering Manager'
/>     </Col>
<Col sm={4}>
<UserCard
    float
    header={background} 
    name='Kaak warka'
    positionName='Delicatesse en Amande'
/> </Col>
<Col sm={4}>

<UserCard
    float
    header={background} 
    name='Kaak warka'
    positionName='Delicatesse en Amande'
/></Col>  </Row>
 </Container> 
 <br></br>
 <br></br>
 <br></br>
<InfoSection {...homeObjOne}/> 
<InfoSection2 {...homeObjtwo}/> 
<InfoSection {...homeObjthree}/> 
    </div>
  ); }


export default App;
