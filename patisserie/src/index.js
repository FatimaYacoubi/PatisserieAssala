import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SigninPage from './pages/signin';
import {BrowserRouter as Router,Route,Routes,Navigate} from 'react-router-dom';
import Product from './pages/products';
import SignUp from './pages/signup';
import NotFound from './Components/Notfound';
import Evenements from './Components/Evenements';
import Service from './pages/services';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
<Routes>
<Route path="/" element={<App/>} />
<Route path="/home" exact element={<App/>} />
<Route path="/not-found" element={<NotFound/>} />
<Route path="/signin" element={<SigninPage/>} />
<Route path="/products" element={<Product/>} />
<Route path="/signup" element={<SignUp/>} />
<Route path="/services" element={<Service/>} />

<Route path="*" element={<Navigate to ="/not-found" />}/>
  </Routes>

</Router>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
