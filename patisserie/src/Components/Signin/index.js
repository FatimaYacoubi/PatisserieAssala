import React from 'react'
import './elements.css';
import { useNavigate } from "react-router-dom";
import logo from '../logo.png'
import { useState } from 'react';
import { Button } from 'react-bootstrap'
import { Container,FormWrap,Icon,FormContent,Form,FormLabel,FormButton,Text,FormH1, FormInput } from './SigninElements'
import Background from '../../Components/background2.png'
function SignIn (){ 
    let navigate = useNavigate();
    const nameStat = "ali@j.com";
    const passwordStat = 22222;
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    function checkValidation()
    {
        if((name==nameStat)&&(password == passwordStat))
        {
            alert('Connecté');
            navigate('/home');

        } else 
        {
            alert('Mot de passe ou email incorrect');
        }
    }
    return (
   <>
   
   <Container>
   <div style={{ backgroundImage: `url(${Background})`,backgroundSize: 'cover', 
                backgroundRepeat: 'repeat',
                }}>

    <FormWrap>
        <Icon to="/"><div>
            <img src={logo}/> </div>      </Icon>
        <FormContent>
            <FormContent>
                <Form action="#">
                <div className="navbar-logo">
            <img src={logo}/> </div>         
            <FormH1> CONNECTEZ VOUS</FormH1>

                   <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput type='email' required onChange={(e)=>{setName(e.target.value)}}/>
                <FormLabel htmlFor='for'>Mot de passe</FormLabel>
                <FormInput type='password' required onChange={(e)=>{setPassword(e.target.value)}} />
                <Button type='submit' onClick={checkValidation}>Continue</Button>
                <Text>Mot de passe oublié?</Text>
                </Form>
            </FormContent>
        </FormContent>
    </FormWrap>
    </div>

   </Container>
    </>
  )
}

export default SignIn