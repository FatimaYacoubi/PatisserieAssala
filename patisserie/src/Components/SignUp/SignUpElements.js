import styled from 'styled-components';
import { Link } from 'react-router-dom'
import Background from '../../images/background.png'

export const Container = styled.div`
margin-bottom:-50px;
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

export const Icon = styled(Link)`
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color: #fff;
font-weight: 700;
font-size: 32px;

@media screen and (max-width: 480px)
{
    margin-left: 16px;
    margin-top: 8px;
} `;
export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    @media screen and(max-width:480px)
    {
        padding: 10px;
    }
    `;
export const Form = styled.form`
background: rgba(255, 255, 255, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.3);
height: auto;
width: 500px;
z-index: 1;
display: grid;
margin: 0 auto;
margin-bottom:30px;
padding: 10px 32px;
margin-top:30px
border-radius: 4px;
@media screen and (max-width:480px)
{
    padding: 32px 32px;
} `;

export const FormH1 = styled.h1`
margin-top: 20px;
color: #e89972;
font-size: 28px;
font-weight: 700;
text-align: center;
`;
export const FormLabel = styled.label`
margin-bottom: 2px;
font-size: 14px;
color: #fff;
`;
export const FormInput = styled.input`
padding: 16px 16px;
margin-bottom:32px;
border:none;
border-radius: 4px;
`;
export const FormButton = styled.button`
background: #fff;
padding: 16px 0;
border : none;
border-radius: 4px;
color: #000;
font-size: 20px;
cursor: pointer; `;
export const Text = styled.span`
text-align: center;
margin-top: 24px;
color: #000;
font-size: 14px;
`;
