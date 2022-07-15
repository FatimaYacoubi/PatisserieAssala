import React from 'react'
import './elements.css';
import logo from '../logo.png'

import { Button } from 'react-bootstrap'
import { Container,FormWrap,Icon,FormContent,Form,FormLabel,FormButton,Text,FormH1, FormInput } from './SigninElements'
import Background from '../../Components/background2.png'
const SignIn = () => { 
  return (
   <>
   <Container>
   <div style={{ backgroundImage: `url(${Background})`,backgroundSize: 'cover', 
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
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

export default SignIn