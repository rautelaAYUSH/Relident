import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Discover the Secret to a Brighter Smile</h1>
        <p className="hero-subtitle">Experience advanced oral care for a healthier, confident you.</p>
        <a href="/all-products" className="hero-button">All Products</a>
      </div>
      <div className="approved-by-section">
        <div className="logo-container">
          <h2 className="approved-by-heading">Approved By</h2>
          <div className="logo-item">
            <img src="approved.jpg" alt="Company 1" className="logo" />
            {/* <p className="logo-text">Dentist Recommended</p> */}
          </div>
          <div className="logo-item">
            <img src="approved.jpg" alt="Company 2" className="logo" />
            {/* <p className="logo-text">Eco-Friendly Seal</p> */}
          </div>
          <div className="logo-item">
            <img src="approved.jpg" alt="Company 3" className="logo" />
            {/* <p className="logo-text">Oral Health Foundation</p> */}
          </div>
          <div className="logo-item">
            <img src="approved.jpg" alt="Company 4" className="logo" />
            {/* <p className="logo-text">Sustainable Choice</p> */}
          </div>
          <div className="logo-item">
            <img src="approved.jpg" alt="Company 5" className="logo" />
            {/* <p className="logo-text">Vegan Certified</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;