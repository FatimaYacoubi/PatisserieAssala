import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SigninPage from './pages/signin';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Product from './pages/products';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
<Routes>
<Route path="/" element={<App/>} />
<Route path="/home" element={<App/>} />

<Route path="/signin" element={<SigninPage/>} />
<Route path="/products" element={<Product/>} />

  </Routes>

</Router>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
