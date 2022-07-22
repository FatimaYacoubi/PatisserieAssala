import React from 'react'
import './elements.css';
import { useNavigate } from "react-router-dom";
import logo from '../logo.png'
import { useState } from 'react';
import { Button } from 'react-bootstrap'
import { Container,FormWrap,Icon,FormContent,Form,FormLabel,FormButton,Text,FormH1, FormInput } from './SignUpElements'
import Background from '../../Components/background2.png'
function SignUp() {
  return (
    <>
    <Container>
    <div style={{ backgroundImage: `url(${Background})`,backgroundSize: 'cover', 
                 backgroundPosition: 'center center',
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
             <FormH1> Connectez Vous</FormH1>
 
                    <FormLabel htmlFor='for'>Prenom</FormLabel>
                 <FormInput type='text' required />
                 <FormLabel htmlFor='for'>Nom</FormLabel>
                 <FormInput type='text' required />
                 <FormLabel htmlFor='for'>Adresse</FormLabel>
                 <FormInput type='text' required />
                 <FormLabel htmlFor='for'>Email</FormLabel>
                 <FormInput type='email' required />
                 <FormLabel htmlFor='for'>Mot de passe</FormLabel>
                 <FormInput type='password' required />
                 <Button type='submit'>Continue</Button>
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

export default SignUp