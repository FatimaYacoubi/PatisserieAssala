import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Carousel } from 'react-responsive-carousel';
import background  from './Components/background.png'
import { UserCard } from 'react-ui-cards';
import { Container, Row, Col } from 'react-grid-system';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Carousel>
                <div>
                    <img src={background} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={background} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={background} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            <Container>
            <Row>
    <Col sm={4}>
            <UserCard
    float
    href='https://github.com/nukeop'
    header='https://i.imgur.com/vRAtM3i.jpg'
    avatar='https://i.imgur.com/XJxqvsU.jpg'
    name='Frank Hepsfield'
    positionName='Software Engineering Manager'
/>     </Col>
<Col sm={4}>
<UserCard
    float
    href='https://github.com/nukeop'
    header='https://i.imgur.com/vRAtM3i.jpg'
    avatar='https://i.imgur.com/XJxqvsU.jpg'
    name='Frank Hepsfield'
    positionName='Software Engineering Manager'
/> </Col>
<Col sm={4}>

<UserCard
    float
    href='https://github.com/nukeop'
    header='https://i.imgur.com/vRAtM3i.jpg'
    avatar='https://i.imgur.com/XJxqvsU.jpg'
    name='Frank Hepsfield'
    positionName='Software Engineering Manager'
/></Col>  </Row>
 </Container> 

    </div>
  ); }


export default App;
