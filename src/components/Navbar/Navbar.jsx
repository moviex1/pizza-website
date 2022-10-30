import React from 'react';
import { NavLink } from 'react-router-dom';
import CartIcon from './CartIcon';
import './NavbarStyles.css';


const Navbar = () => { 
  return (
    <div className='nav active'>
        <img className='logo' src="https://mir-s3-cdn-cf.behance.net/projects/max_808/17dd5275338155.Y3JvcCwyMjg0LDE3ODYsMCw1Ng.png" alt="" width="90px"/>

        <ul className='nav-categ'>
            <li>
                <NavLink to='home'><span>Home</span></NavLink>
            </li>
            <li>
                <NavLink to='menu'><span>Menu</span></NavLink>
            </li>
            <li>
                <NavLink to='about'><span>About</span></NavLink>
            </li>
            <li>
                <NavLink to='gallery'><span>Gallery</span></NavLink>
            </li>
            <li>
                <NavLink to='cart'><span><CartIcon /></span></NavLink>
            </li>
        </ul>
        
    </div>
  )
}

export default Navbar;