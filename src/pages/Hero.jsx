// import React from "react";
// import "./Hero.css";

// const Hero = () => {
//   return (
//     <div className="relident-hero">
//       <section className="hero-top">
//         <div className="hero-background">
//           <img src="/hero_bg.png" alt="Relident Background" className="hero-bg-image"/>
//         </div>
        
//         <div className="hero-text-overlay">
//           <h1>DISCOVER A BRIGHTER, HEALTHIER SMILE.</h1>
//           <div className="divider-line"></div>
//           <h2>EXPERIENCE THE NATURAL EVOLUTION OF ORAL CARE.</h2>
//         </div>
//       </section>
//       <section className="hero-bottom">
//         <div className="product-grid">
//           {[1, 2, 3].map((num) => (
//             <div key={num} className="product-item">
//               <a href="#" className="product-link">
//                 SHOP NOW
//                 <span className="link-underline"></span>
//               </a>
//               <img 
//                 src={`/product_${num}.png`} 
//                 alt={`Relident Product ${num}`} 
//                 className="product-image"
//               />
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Hero;

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
        <div className="product-showcase">
          {[1, 2, 3].map((num) => (
            <div key={num} className="product-card">
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
                <div className="product-glow"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LuxuryHero;









