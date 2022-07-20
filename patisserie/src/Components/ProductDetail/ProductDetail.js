import React from 'react';
import {Button} from "../Button";
import Combobox from "react-widgets/Combobox";

import './elements.css';
import { InfoContainer,InfoWrapper,Column2, InfoRow2, Column1,TextWrapper,TopLine,Heading,Subtitle,BtnWrap,ImgWrap,Img, InfoRow } from './infoElements';
const ProductDetail = ( {lightBg , id ,imgStart,topLine,lightText,headline,darkText,buttonLabel,img, description,alt}) => {
    return (
    <>
   <InfoContainer lightBg={lightBg} id={id}>
    <InfoWrapper>
        <InfoRow2 imgStart={imgStart}>
            <Column1>
            <TextWrapper>
                <TopLine>{topLine}</TopLine>
    <Heading lightText={lightText}>{headline}</Heading>
    <Subtitle darkText={darkText}>{description}</Subtitle>
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
            <Img src={img} alt={alt}/>
            </ImgWrap>
            </Column2>
        </InfoRow2>
    </InfoWrapper>
   </InfoContainer>
    </> 
    );
}
export default ProductDetail