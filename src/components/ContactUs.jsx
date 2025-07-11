import React from 'react';
import './ContactUs.css';
import bottle1 from '../assets/bottle1.jpg';
import bottle2 from '../assets/bottle2.jpg';

const ContactUs = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Let’s collaborate to make every sip a brand moment!</p>
      </div>

      <div className="contact-content">
        {/* Left: Contact Info + Bottles */}
        <div className="contact-left">
          <div className="contact-info">
            <h3>📍 Address</h3>
            <p> Madhopur susta, Kachhi Pakki,<br></br>
                 Muzzafarpur, Bihar, India</p>
            <h3>📞 Phone</h3>
            <p>+91 8252302656</p>
            <h3>📧 Email</h3>
            <p>sipforge3@gmail.com</p>
          </div>

          <div className="bottle-images">
            <img src={bottle1} alt="Bottle 1" className="bottle animate1" />
            <img src={bottle2} alt="Bottle 2" className="bottle animate2" />
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="contact-right">
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="text" placeholder="Company Name" />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
