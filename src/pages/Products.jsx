import React, { useState } from 'react';
import './Products.css';

const LuxuryProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const products = [
    {
      id: 1,
      image: '/product_1.png',
      name: 'ER COLLECTION',
      description: 'For sensitive smiles — Himalayan mineral complex with Swiss nanotechnology',
      price: '$39',
      features: ['EnamelSafe™', '24H Protection', 'Ayurvedic Herbs'],
      accent: '#2098b2'
    },
    {
      id: 2,
      image: '/product_2.png',
      name: 'CC WHITENING',
      description: 'Activated charcoal meets cold-pressed coconut oil for museum-grade whitening',
      price: '$45',
      features: ['Zero Peroxide', 'Vegan', 'FDA-Approved'],
      accent: '#32b561'
    },
    {
      id: 3,
      image: '/product_3.png',
      name: 'PRO REMINERAL',
      description: 'Dental-grade nano-hydroxyapatite rebuilds enamel microstructure',
      price: '$59',
      features: ['22K Crystals', 'FSC Packaging', 'Dentist-Developed'],
      accent: '#1faee2'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  return (
    <div className="luxury-showcase">
      {/* Glassmorphism Navigation */}
      <nav className="luxury-nav">
        <h2>RELIDENT</h2>
        <div className="nav-divider"></div>
        <span className="collection-name">ESSENTIALS COLLECTION</span>
      </nav>

      {/* Full-viewport Carousel */}
      <div className="viewport-carousel">
        {/* Dynamic Background */}
        <div 
          className="dynamic-bg" 
          style={{ backgroundColor: products[currentIndex].accent + '15' }}
        ></div>

        {/* Product Display */}
        <div className="product-display">
          <button className="carousel-control prev" onClick={prevSlide}>
            <div className="control-arrow">←</div>
          </button>

          <div className="product-centerpiece">
            <div className="product-visual">
              <img 
                src={products[currentIndex].image} 
                alt={products[currentIndex].name} 
                className="floating-product"
              />
              <div className="product-aura"></div>
            </div>
            
            <div className="product-meta">
              <h3>{products[currentIndex].name}</h3>
              <p>{products[currentIndex].description}</p>
              
              <ul className="tech-features">
                {products[currentIndex].features.map((feature, i) => (
                  <li key={i}>
                    <div className="feature-marker"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="action-row">
                <span className="price">{products[currentIndex].price}</span>
                <button className="purchase-cta">
                  <span>ADD TO CART</span>
                  <div className="cta-underline"></div>
                </button>
              </div>
            </div>
          </div>

          <button className="carousel-control next" onClick={nextSlide}>
            <div className="control-arrow">→</div>
          </button>
        </div>

        {/* Luxury Indicators */}
        <div className="position-indicators">
          {products.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              style={{ '--accent': products[index].accent }}
            >
              <div className="indicator-progress"></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LuxuryProducts;