import './notfound.css';
import logo from '../logo.png';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer'
const NotFound = () => {
    return ( <div>
        <Navbar />
        <div className="not-found">
      

            <h2> 404</h2>
            <p>Page not found</p>
             </div>
             <Footer /> </div>
             
    );
};
export default NotFound;