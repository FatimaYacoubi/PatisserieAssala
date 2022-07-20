import React from 'react'
import BestSellers from '../Components/BestSellers';
import Evenements from '../Components/Evenements';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar/Navbar';
const Service = () => {
  return (
    <div> 
        <Navbar />
        <Evenements />
        <BestSellers />
        <Footer />
        </div>
  )
}

export default Service