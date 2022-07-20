import React, { useState } from 'react';
import { css,cx} from '@emotion/css';
import { Form ,FormWrap,Container,TopLine, Heading} from '../Quote/Testimonial'
import hcbgImage from '../../Components/background2.png'
const Quote = () => {
  const quotes = {
    0: {
        client: "Mohamed Hedi Yaacoubi",
        quote:" Kaak Waarka est extraordinaire! Un must-try!"
    },
    1: {
        client: "Aziz Cherif",
        quote:"C'est trés Delicieuse ! Chkoun mouléha? "
  
    },
    2: {
        client: "Amira ben Othman",
        quote:" Service Excellent! Staff trés comprehensive"
  
    },
    3: {
        client: "Jihene Azzouz",
        quote:"Staff Chaleureux , Service excellent et propre ( On peut voir ce qui se passe dans le  Laboratoire! Un vrai delice"
  
    },
  }
  const [current, setCurrent] = useState(quotes[0])
  const [active, setActive]= useState(0)
   const handleSetClick = (event) => {
    setCurrent(quotes[event.target.getAttribute("data-quote")])
    setActive(event.target.getAttribute("data-quote"))
}
    return (
        <div align="center">
        <div
        style={{
          backgroundImage: 'url('+hcbgImage+')',
          backgroundSize: "cover",
          height: "90vh",
          color: "#f5f5f5",
          alignContent: "center"
          
        }}
      >
       <Container align="center"> <FormWrap> <Form> 
       <Heading> LES AVIS DE NOS CLIENTS</Heading> 

        <div className={css`
    display: flex;
    flex-direction: column ;
    align-items: center;
    margin: 40px;

    max-width: 700px;
    p{
        text-align:center;
        margin-bottom:20px;
        color: #cececd;
        font-weight: 200;
        font-size:20px;
    }
    `}>
    <div> <p>{current.quote} </p>
    <p>{current.client} </p>
  <div  
  className={css`
  display: flex;
  align-items: center;
justify-content: center;
  span {
    height: 20px;
    width: 20px;
    margin: 0 3px;
    display: flex;
    align-items: center;
 
    cursor: pointer;


  }
  span::before {
    align-items: center;
justify-content: center;
    content: "";
    height: 6px;
    width: 6px;
    background-color: #d4d4d4;
    border-radius: 50%;

    transition: background-color 0.3s ease;
  }
  span:hover::before {
    align-items: center;
    justify-content: center;
    background-color: #e89972;
  }
  span[data-quote="${active}"]::before {
    background-color: #e89972;
    align-items: center;

  }

  `}>
        {Object.keys(quotes).map(index =>(
            <span
            onClick= {event => handleSetClick(event)}
            data-quote={index}
            key= {index} />
        ))}
  </div> </div> </div> </Form></FormWrap>  </Container>  </div>  </div>
  )
}

export default Quote