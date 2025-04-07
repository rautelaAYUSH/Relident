import React, { useState, useEffect } from 'react';
import './Products.css';

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const products = [
    {
      id: 1,
      image: '/product_1.png',
      name: 'ER COLLECTION',
      description: 'For sensitive smiles — Himalayan mineral complex with Swiss nanotechnology',
      price: '$39',
      features: ['EnamelSafe™', '24H Protection', 'Ayurvedic Herbs'],
      accent: '#2098b2' // Teal
    },
    {
      id: 2,
      image: '/product_2.png',
      name: 'CC WHITENING',
      description: 'Activated charcoal meets cold-pressed coconut oil for museum-grade whitening',
      price: '$45',
      features: ['Zero Peroxide', 'Vegan', 'FDA-Approved'],
      accent: '#32b561' // Mint Green
    },
    {
      id: 3,
      image: '/product_3.png',
      name: 'PRO REMINERAL',
      description: 'Dental-grade nano-hydroxyapatite rebuilds enamel microstructure',
      price: '$59',
      features: ['22K Crystals', 'FSC Packaging', 'Dentist-Developed'],
      accent: '#1faee2' // Sky Blue
    }
  ];

  // Auto-rotate every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [isHovering, products.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  return (
    <div className="luxury-container">
      {/* 3D Background Elements */}
      <div className="bg-sphere sphere-1"></div>
      <div className="bg-sphere sphere-2"></div>
      <div className="bg-sphere sphere-3"></div>
      <div className="bg-sphere sphere-4"></div>
      
      {/* Floating Particles */}
      <div className="particle p1"></div>
      <div className="particle p2"></div>
      <div className="particle p3"></div>
      <div className="particle p4"></div>

      {/* Main Product Card */}
      <div className="product-card">
        {/* Navigation */}
        <div className="brand-header">
          <div className="divider-line"></div>
          <h2>RELIDENT</h2>
          <div className="divider-line"></div>
          <span className="collection">ESSENTIALS COLLECTION</span>
        </div>

        {/* Product Display */}
        <div 
          className="product-display"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Background Glow */}
          <div 
            className="product-glow" 
            style={{ background: `radial-gradient(circle, ${products[currentIndex].accent}20, transparent 70%)` }}
          ></div>

          {/* Left Column - Product Image */}
          <div className="product-visual">
            <button className="nav-btn prev" onClick={prevSlide}>
              <span className="arrow"></span>
            </button>
            
            <div className="image-container">
              <img 
                src={products[currentIndex].image} 
                alt={products[currentIndex].name}
                className="product-image"
                style={{ filter: `drop-shadow(0 20px 40px ${products[currentIndex].accent}40)` }}
              />
              <div className="halo-effect" style={{ backgroundColor: products[currentIndex].accent + '15' }}></div>
            </div>
            
            <button className="nav-btn next" onClick={nextSlide}>
              <span className="arrow"></span>
            </button>
          </div>

          {/* Right Column - Product Details */}
          <div className="product-info">
            <h3 style={{ color: products[currentIndex].accent }}>{products[currentIndex].name}</h3>
            <p className="description">{products[currentIndex].description}</p>
            
            <ul className="features">
              {products[currentIndex].features.map((feature, i) => (
                <li key={i}>
                  <span className="feature-marker" style={{ backgroundColor: products[currentIndex].accent }}></span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="action-area">
              <span className="price" style={{ color: products[currentIndex].accent }}>{products[currentIndex].price}</span>
              <button 
                className="cta-button"
                style={{ 
                  background: `linear-gradient(135deg, ${products[currentIndex].accent}, ${products[(currentIndex + 1) % products.length].accent})`
                }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="indicators">
          {products.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              style={{ '--accent': products[index].accent }}
            >
              <div className="progress-bar"></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;