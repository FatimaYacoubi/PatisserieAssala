import React from 'react';
import {Button} from "../Button"
import { InfoContainer,InfoWrapper,Column2, InfoRow2, Column1,TextWrapper,TopLine,Heading,Subtitle,BtnWrap,ImgWrap,Img, InfoRow } from './infoElements';
const InfoSection2 = ( {lightBg , id ,imgStart,topLine,lightText,headline,darkText,buttonLabel,img, description,alt}) => {
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
    <BtnWrap>
        <Button to='home'>{buttonLabel} </Button>
    </BtnWrap>
            </TextWrapper>
            </Column1>
            <Column2>
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
export default InfoSection2