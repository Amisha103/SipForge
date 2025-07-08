import React from 'react';
import './Footer.css';
import { FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { BsShieldLock } from 'react-icons/bs';
import { MdCookie } from 'react-icons/md';
import { HiOutlineBriefcase } from 'react-icons/hi2';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-column">
          <h4>Social Media</h4>
          <ul>
            <li><FaWhatsapp /> <a href="#">WhatsApp</a></li>
            <li><FaInstagram /> <a href="#">Instagram</a></li>
            <li><FaTwitter /> <a href="#">Twitter</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li><IoDocumentTextOutline /> <a href="#">Terms of Use</a></li>
            <li><BsShieldLock /> <a href="#">Privacy Policy</a></li>
            <li><MdCookie /> <a href="#">Cookie Policy</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><HiOutlineBriefcase /> <a href="#">Jobs</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 SipForge. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
