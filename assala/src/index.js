import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserCard } from 'react-ui-cards';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserCard
    float
    href='https://github.com/nukeop'
    header='https://i.imgur.com/vRAtM3i.jpg'
    avatar='https://i.imgur.com/XJxqvsU.jpg'
    name='Frank Hepsfield'
    positionName='Software Engineering Manager'
/>  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
