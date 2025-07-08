// HomeSection.jsx
import React from 'react';
import './HomeSection.css';
import { FaUtensils, FaGlassCheers, FaHotel, FaSchool, FaDumbbell, FaStore, FaHospital, FaVoteYea } from 'react-icons/fa';
import bottle1 from '../assets/bottle1.jpg';
import bottle2 from '../assets/bottle2.jpg';
import bottle3 from '../assets/bottle3.jpg';
import bottle4 from '../assets/bottle4.jpg';

const HomeSection = () => {
  return (
    <section className="home-wrapper" id="home">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="quote-label">
          <h1 className="hero-title">
            Crafted with Passion, Driven by Purpose — <br />
            Turning Dreams into Reality, One Sip at a Time.
          </h1>
        </div>
        <p className="hero-subtext">
          Transform Water Bottles into Advertising Space!<br />
          Non-skippable, cost-effective ads on everyday essentials.
        </p>
        <a href="#contact" className="hero-button">Partner With Us</a>
      </div>

      {/* Bottle Gallery */}
      <div className="bottle-gallery creative-spin">
        <img src={bottle1} alt="Bottle 1" className="bottle-img spin-img delay1" />
        <img src={bottle2} alt="Bottle 2" className="bottle-img spin-img delay2" />
        <img src={bottle3} alt="Bottle 3" className="bottle-img spin-img delay3" />
        <img src={bottle4} alt="Bottle 4" className="bottle-img spin-img delay4" />
      </div>

      {/* Industries Section */}
      <div className="industries-section">
        <h2 className="industries-title">Industries We Serve</h2>
        <div className="industries-grid">
          <div className="industry"><FaUtensils /><p>Restaurants & Cafes</p></div>
          <div className="industry"><FaGlassCheers /><p>Events & Weddings</p></div>
          <div className="industry"><FaHotel /><p>Hotels & Resorts</p></div>
          <div className="industry"><FaSchool /><p>Schools & Colleges</p></div>
          <div className="industry"><FaDumbbell /><p>Gyms & Fitness Centers</p></div>
          <div className="industry"><FaStore /><p>Shops & Retailers</p></div>
          <div className="industry"><FaHospital /><p>Hospitals & Clinics</p></div>
          <div className="industry"><FaVoteYea /><p>Political Campaigns</p></div>
        </div>
      </div>
      <section className="why-choose">
  <h2>Why Choose SipForge As Your Branding Partner?</h2>
  <div className="choose-carousel">
    <div className="carousel-card">
      <h3>High Visibility & Brand Recall</h3>
      <p>Bottles in hand = brand in mind. Capture lasting impressions with every sip.</p>
    </div>
    <div className="carousel-card">
      <h3>Cost-Effective & Wide Reach</h3>
      <p>Affordable advertising that flows into public spaces and personal moments.</p>
    </div>
    <div className="carousel-card">
      <h3>Targeted & Customised</h3>
      <p>Your brand. Your audience. Your design. Complete control over your message.</p>
    </div>
    <div className="carousel-card">
      <h3>Trackable Impact</h3>
      <p>Built-in QR codes bring analytics to the physical world — track real engagement.</p>
    </div>
    <div className="carousel-card">
      <h3>Unique & Exclusive</h3>
      <p>Stand out with real-world visibility no digital ad can match. Pure impact.</p>
    </div>
    <div className="carousel-card">
      <h3>Social Media Buzz</h3>
      <p>Our stunning bottles spark curiosity and selfies — your brand goes viral!</p>
    </div>
  </div>
</section>

    </section>
  );
};

export default HomeSection;