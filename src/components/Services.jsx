import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services-wrapper" id="services">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>
          At <strong>SipForge</strong>, we redefine brand visibility by transforming ordinary water bottles into captivating, eco-conscious advertising tools.
        </p>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <h2>Branded Water Bottles</h2>
          <p>We create beautifully branded bottles with your logo and message—turning everyday use into brand recall.</p>
        </div>

        <div className="service-card">
          <h2>Available Sizes</h2>
          <p>Choose from our premium quality bottle variants:</p>
          <ul>
            <li>🍼 200ml - Compact & easy to carry</li>
            <li>🥤 500ml - Ideal for daily use</li>
            <li>💧 1000ml - Perfect for long outdoor events</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>Eco-Friendly Options</h2>
          <p>Promote sustainability with biodegradable or reusable bottles that align with your green goals.</p>
        </div>

        <div className="service-card">
          <h2>Targeted Distribution</h2>
          <p>We place your branded bottles in gyms, events, offices, and colleges for maximum exposure.</p>
        </div>

        <div className="service-card">
          <h2>Design Support</h2>
          <p>No designer? No worries. Our team helps you craft a bold and modern look for your bottle campaign.</p>
        </div>

        <div className="service-card">
          <h2>Bulk Orders & Logistics</h2>
          <p>From production to packaging and delivery—we manage it all efficiently, regardless of your business size.</p>
        </div>

        <div className="service-card">
          <h2>Campaign Tracking</h2>
          <p>We offer insights and reports so you can track performance, reach, and return on investment.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
