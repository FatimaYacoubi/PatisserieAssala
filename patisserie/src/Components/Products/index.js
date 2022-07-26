import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './../Products/Products.css';
import'../ProductDetail/elements.css';
import Kaakwarka from '../../images/Kaakwarka.png'
import { Button } from '../Button';
import { ServicesH1 } from './StyledElements';
import Products from './Products';
import axios from "axios";
import { useState } from 'react';
const ProductsList = () => {
	const [products,setProducts]= useState([]);
  
	useEffect(()=> {
  const fetchproducts = async () =>{
	  const { data } = await axios.get(`/api/products`);
	  setProducts(data);
  }; 
  fetchproducts();
	},[]);
	return(
        <div>
            <ServicesH1>Nos Produits </ServicesH1>

<body>

	<section>
		<div class="container">
			{Products.map((Product) => (
			<div class="card"  key={ Product._id}>
				<div class="content">
					<div class="imgBx">
                    <img  src={Product.image} alt={Product.name}/>
					
					</div>
					<div class="contentBx">
						<h3>{Product.name}<span> <strong>Prix {Product.price} Dt </strong></span></h3>
					</div>
				</div>
				<ul class="sci">
			
				</ul> 
			</div> ))}
	  </div> 
	</section>
    </body>
    </div>
    )
}
export default ProductsList;