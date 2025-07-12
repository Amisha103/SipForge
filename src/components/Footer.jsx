import React from 'react';
import './Footer.css';
import { FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { BsShieldLock } from 'react-icons/bs';
import { MdCookie } from 'react-icons/md';
import { HiOutlineBriefcase } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-column">
          <h4>Social Media</h4>
          <ul>
            <li>
              <FaWhatsapp />
              <a href="http://wa.me/918252302656" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </li>
            <li>
              <FaInstagram />
              <a href="https://www.instagram.com/sipforge/profilecard/?igsh=MWNndmNxYWNqcG85" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
            <li>
              <FaTwitter />
              <a href="https://twitter.com/sipforge" target="_blank" rel="noopener noreferrer">Twitter</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li>
              <IoDocumentTextOutline />
              <a href="#" title="Coming Soon">Terms of Use</a>
            </li>
            <li>
              <BsShieldLock />
              <a href="#" title="Coming Soon">Privacy Policy</a>
            </li>
            <li>
              <MdCookie />
              <a href="#" title="Coming Soon">Cookie Policy</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>
              <HiOutlineBriefcase />
             <Link to="/jobs">Jobs</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* FSSAI Number Section */}
     <div className="fssai-wrapper">
  <div className="fssai-number">
    <p>FSSAI Lic/Reg No. : <strong>20425061000572</strong></p>
  </div>
</div>

      <div className="footer-bottom">
        <p>© 2025 SipForge. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
