import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="SipForge Logo" className="logo" />
        <span className="brand-name">SipForge</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
