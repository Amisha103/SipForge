import React, { useRef } from 'react';
import './ContactUs.css';
import emailjs from '@emailjs/browser';
import logo from '../assets/logo.jpg';


const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_wk1141f',     // 🔁 Replace with your EmailJS service ID
      'template_hviwmqb',    // 🔁 Replace with your EmailJS template ID
      form.current,
      '7Y5SorzxIByNl-GhW'      // 🔁 Replace with your EmailJS public key
    )
    .then((result) => {
      alert('✅ Message sent successfully!');
      form.current.reset();
    })
    .catch((error) => {
      console.error(error.text);
      alert('❌ Failed to send message. Please try again.');
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Let’s collaborate to make every sip a brand moment!</p>
      </div>

      <div className="contact-content">
        {/* Left: Info + Bottles */}
        <div className="contact-left">
          <div className="contact-info">
            <div className="contact-info-row">
              <h3>📍 Address</h3>
              <p>
                Madhopur Susta, Kachhi Pakki,<br />
                Muzaffarpur, Bihar, India
              </p>
            </div>

            <div className="contact-info-row">
              <h3>📞 Phone</h3>
              <p>+91 8252302656</p>
            </div>

            <div className="contact-info-row">
              <h3>📧 Email</h3>
              <p>sipforge3@gmail.com</p>
            </div>
          </div>

          <div className="bottle-images">
            <img src={logo} alt="Bottle 1" className="bottle animate1" />
          
          </div>
        </div>

        {/* Right: Form */}
        <div className="contact-right">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
