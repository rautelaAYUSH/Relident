import React from "react";
import "./Hero.css";

const LuxuryHero = () => {
  return (
    <div className="luxury-hero">
      <section className="hero-top-section">
        <div className="hero-background-wrapper">
          <img 
            src="/hero_bg.png" 
            alt="Relident Background" 
            className="hero-bg-image"
          />
          <div className="gradient-overlay"></div>
        </div>
        
        <div className="hero-content">
          <h1 className="hero-headline">DISCOVER A BRIGHTER, HEALTHIER SMILE.</h1>
          <div className="luxury-divider">
            <span className="divider-diamond"></span>
          </div>
          <h2 className="hero-subhead">EXPERIENCE THE NATURAL EVOLUTION OF ORAL CARE.</h2>
        </div>
      </section>

      <section className="hero-products">
        {/* 3D Background Elements */}
        <div className="product-sphere sphere-1"></div>
        <div className="product-sphere sphere-2"></div>
        <div className="product-sphere sphere-3"></div>
        <div className="product-sphere sphere-4"></div>
  
        {/* Floating Particles */}
        <div className="product-particle particle-1"></div>
        <div className="product-particle particle-2"></div>
        <div className="product-particle particle-3"></div>
        <div className="product-particle particle-4"></div>
        
        <div className="product-showcase">
          {[1, 2, 3].map((num) => (
            <div key={num} className="product-cardd">
              <a href="#" className="product-cta">
                SHOP NOW
                <span className="cta-underline"></span>
              </a>
              <div className="product-image-container">
                <img 
                  src={`/product_${num}.png`} 
                  alt={`Relident Product ${num}`} 
                  className="product-image"
                />
                <div className="product-gloww"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LuxuryHero;









