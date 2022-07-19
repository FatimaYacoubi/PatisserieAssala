import React, { Component } from 'react';
import { MenuItems} from "./MenuItems";
import './Navbar.css'
import logo from '../logo.png'
import { FaShoppingCart } from "react-icons/fa";
import {Nav, Badge,Dropdown} from "react-bootstrap";
class Navbar extends Component {
    state = { clicked: false}
    
    handleClick = () =>{
        this.setState({ clicked: !this.state.clicked})
    }
    render() 
    {
        return(
            <div><nav className="NavbarItems">
            <div className="navbar-logo">
            <img src={logo}/> </div>
            <div className="menu-icon"onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                { MenuItems.map((item,index)=>{
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                            {item.title}
                            
                            
                            </a>
                            </li>

                    )
                })}
            </ul>
           <div>
            <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
            <FaShoppingCart color="white" fontSize="25px" />

              <Badge>{10}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370 }}>
                <span>Cart is Empty!</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
 </div> 
            </nav> </div> 
        )

    }
}
export default Navbar;