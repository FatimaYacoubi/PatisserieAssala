import React from 'react';
import {Button} from "../Button";
import Combobox from "react-widgets/Combobox";
import { useEffect,useState } from 'react';
import './elements.css';
import axios from 'axios';
import { InfoContainer,InfoWrapper,Column2, InfoRow2, Column1,TextWrapper,TopLine,Heading,Subtitle,BtnWrap,ImgWrap,Img, InfoRow} from './infoElements';
import { useParams } from 'react-router-dom';
import { FormH1 } from '../Signin/SigninElements';
const productDetail = ( {lightBg,imgStart,FormH1,lightText,headline,darkText,buttonLabel}) => {  
    const [product, setProduct] = useState({})
    const { id } = useParams()
  
    useEffect(() => {
      const fetchProduct = async () => {
        const { data } = await axios.get(`/api/products/${encodeURIComponent(id)}`)
        setProduct(data)
      }
  
      fetchProduct()
    }, [ id ])
    return (
    <>
   <InfoContainer lightBg={lightBg} id={product._id}>
    <InfoWrapper>
        <InfoRow2 imgStart={imgStart}>
            <Column1>
            <TextWrapper>
                <TopLine>{product.name}</TopLine>
    <Heading lightText={lightText}>{product.name}</Heading>
    <Subtitle darkText={darkText}>{product.description}</Subtitle>
    <h1 style={{color: '#e89972',marginBottom:'30px',marginTop:'-20px',fontSize:'20px'}}> {product.price} DT/Kg</h1>

    <Combobox
  defaultValue="Quantité"
  data={["0.5Kg", "1Kg", "1.5Kg", "2kg"]}
/>;
    <BtnWrap>
        <Button to='home'>{buttonLabel} </Button>
    </BtnWrap>
            </TextWrapper>
            </Column1>
            <Column2 className=" floating">
            <ImgWrap>
            <Img src={product.image} alt={product.name}/>
            </ImgWrap>
            </Column2>
        </InfoRow2>
    </InfoWrapper>
   </InfoContainer>
    </> 
    );
}
export default productDetail