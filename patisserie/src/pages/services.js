import React from 'react'
import BestSellers from '../Components/BestSellers';
import Evenements from '../Components/Evenements';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar/Navbar';
import { ServicesH1 } from '../Components/InstagramEmbed/Styledelements';
const Service = () => {
  return (
    <div> 
        <Navbar /> <div  align="center">
        <ServicesH1> NOS SERVICES</ServicesH1> </div>
        <Evenements />
        <BestSellers />
        <Footer />
        </div>
  )
}

export default Service