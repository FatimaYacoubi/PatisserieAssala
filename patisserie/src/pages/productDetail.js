import React from 'react'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar/Navbar';
import ProductDetail from '../Components/ProductDetail/ProductDetail';
import { homeObjfour, homeObjOne, homeObjthree, homeObjtwo } from '../Components/ProductDetail/Data';

const ProductDetailpage = () => {
  return (
    <div> <Navbar />
    <ProductDetail {...homeObjtwo} />

        <Footer />
        </div>
  )
}

export default ProductDetailpage