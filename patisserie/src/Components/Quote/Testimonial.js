import styled from 'styled-components';
export const Container = styled.div`
bottom: 0;
left: 0;
right: 0;
top: 0;
`;
export const FormWrap= styled.div`
height: 100;
display: flex;
flex-direction:column;
justify-content: center;

@media screen and (max-width: 400px)
{
    height: 80%;
} `;

export const Form = styled.form`
background: rgba(255, 255, 255, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
height: auto;
width: 700px;
align-items: center;

z-index: 1;
display: grid;
margin: 0 auto;
padding: 80px 32px;
border-radius: 4px;
@media screen and (max-width:480px)
{
    padding: 32px 32px;
} `;
export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color:  ${({lightText}) => (lightText ? '#B8ABA2' : '#B8ABA2')};
`
export const TopLine= styled.p`
font-size: 25px;
line-height: 16px;
font-weight: 400;
letter-spacing: 1.5px;
text-transform: uppercase;
margin-bottom: 13px;
`
export const Heading =styled.h1`
margin-bottom: 40px;
margin-top: 60px;

font-size: 40px;
color:
line-height: 1.1;
color: #e89972;
@media screen and (max-width: 480px) {
    font-size:32px;
}`