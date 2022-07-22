import styled from 'styled-components'
export const ServicesContainer = styled.div`
height: 500px;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;

 @media screen and (max-width: 768px)
 {
    height 1200px;
 }
@media screen and (max_width: 480px)
{
    height: 1000px
}
 `
 export const ServicesWrapper = styled.div`
 max-width: 1000px;
 margin: 0 auto;
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 align-items: center;
 grid-gap:100px;
 padding: 0 50px;
 @media screen and (max-width: 1000px)
 {
    grid-template-columns: 1fr 1fr;
 }
 @media screen and (max-width: 768px)
 {
    grid-template-columns: 1fr;
    padding: 0 20;

 }
 `
 export const ServicesCard = styled.div`
 
 background: rgba(255, 255, 255, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);

 display:flex;
 flex-direction: column;
 justify-content: flex-start;
 align-items: center;
 border-radius: 10px;
 max-height: 340px;
 padding: 30px;
 box-shadow: 0 1px 3px rgba(0,0,0,0.2);
 transition: all 0.2s ease-in-out;

 &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
 } `
 export const ServicesIcon = styled.img`
height: 100px;
width: 100px;
margin-bottom: 10px;
`
export const ServicesH1=styled.h1`
font-size: 2.5rem;
letter-spacing: 7px;
color:#e89972;
margin-bottom:50px;
margin-top:-40px;
height:30px;
@media screen and (max-width:480px)
{font-size: 2rem;}
`
export const ServicesH2=styled.h2`
font-size:1rem;
margin-bottom:10px;
color:#e89972;
font-weight: 300;
font-size: 22px;

`
export const ServicesP=styled.p`
font-size: 1rem;
text-align: center;
color:#B8ABA2;
`




