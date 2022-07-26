import React from 'react'
import Products from '../Components/Products';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar/Navbar';
import ProductsList from '../Components/Products';
const Product = () => {
  return (
    <div> <Navbar />
        <ProductsList/>
        <Footer />
        </div>
  )
}

export default Product