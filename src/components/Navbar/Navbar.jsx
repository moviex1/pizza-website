import React, { useEffect, useState } from 'react';
import './NavbarStyles.css';
import CartIcon from './CartIcon';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const showNavbar = ()=> {
    if(window.scrollY >= -10){
            setNavbar(true);
        } else{
            setNavbar(false);
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', showNavbar);

        return () =>{
            window.removeEventListener('scroll', showNavbar)
        }
    }, [])
  return (
    <div className={navbar ? 'nav active' : 'nav'}>
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