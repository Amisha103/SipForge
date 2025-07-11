import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import Services from './components/Services';
import AboutUs from './components/AboutUs';

import Footer from './components/Footer';
import './App.css';
import ContactUs from './components/ContactUs';

const isGithub = window.location.hostname.includes("github.io");
const basename = isGithub ? "/sipforge-catalog" : "/";

function App() {
  return (
    <Router basename={basename}>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
