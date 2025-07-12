import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
     <div className="navbar-left">
  <Link to="/">
    <img src={logo} alt="SipForge Logo" className="logo" />
  </Link>
  <span className="brand-name">SipForge</span>
</div>
      <ul className="navbar-links">
           <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
         <li><Link to="/reviews">Reviews</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
