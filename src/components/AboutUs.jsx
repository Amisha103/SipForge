import React from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <section className="about-wrapper">
      <div className="about-section">
        <h1 className="about-heading">About Us</h1>

        <p className="about-intro">
          At <strong>SipForge</strong>, we are revolutionizing advertising by turning a daily essential—water bottles—into powerful branding tools.
          The idea was sparked by <strong>Ayush Kumar Patel</strong>, a CSE graduate from Muzaffarpur, Bihar, and brought to life with his friends <strong>Nizamuk</strong> and <strong>Mink</strong>.
        </p>

        <p className="about-story">
          With a vision for sustainability and innovation, they built SipForge to offer eco-friendly and cost-effective solutions that make brands memorable with every sip.
        </p>

        <div className="about-highlight-section">
          <div className="highlight-box left-aligned">
            <h2>🚀 Our Vision</h2>
            <p>
              To make everyday essentials the canvas for tomorrow’s brands—where advertising becomes meaningful, memorable, and green.
            </p>
          </div>

          <div className="highlight-box right-aligned">
            <h2>🌱 Our Mission</h2>
            <p>
              To transform water bottles into brand messengers that spark curiosity, start conversations, and leave a lasting impact—while staying kind to the planet.
            </p>
          </div>
        </div>

        <div className="journey">
          <h2>Our Journey</h2>
          <p>
            What began as a college idea has grown into a movement. From Muzaffarpur to businesses nationwide, SipForge helps brands connect meaningfully through water bottle branding.
          </p>
        </div>

        {/* ✅ FSSAI Number Section */}
        <div className="fssai-info">
          <strong>FSSAI Lic/Reg No. :</strong> 20425061000572
        </div>

        {/* CTA Button */}
        <div className="cta">
          <h3>Ready to Build Something Iconic?</h3>
          <p>Your brand deserves more than ads — it deserves conversations. Let's collaborate and make every sip unforgettable.</p>
          <Link to="/contact" className="cta-button">Contact Us</Link>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
