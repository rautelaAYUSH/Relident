// import React from 'react';
// import './OurStory.css';

// const OurStoryLuxury = () => {
//   return (
//     <section className="luxury-story-section">
//       <div className="luxury-watermark">RELIDENT</div>
//       <div className="gradient-overlay"></div>
//       <div className="luxury-content-container">
//         {/* Section Header */}
//         <div className="section-header">
//           <div className="header-line"></div>
//           <h1 className="section-title">
//             <span className="title-highlight">OUR</span> STORY
//           </h1>
//           <div className="header-line"></div>
//         </div>

//         {/* Timeline */}
//         <div className="luxury-timeline">
//           {/* Timeline Item 1 */}
//           <div className="timeline-item" style={{ '--accent-color': '#2098b2' }}>
//             <div className="timeline-year">2015</div>
//             <div className="timeline-content">
//               <h3>The Genesis</h3>
//               <p>
//                 Born in a Swiss lab, RELIDENT fused dental science with luxury aesthetics, 
//                 redefining oral care as an experience.
//               </p>
//               <div className="timeline-ornament"></div>
//             </div>
//           </div>

//           {/* Timeline Item 2 */}
//           <div className="timeline-item" style={{ '--accent-color': '#32b561' }}>
//             <div className="timeline-year">2018</div>
//             <div className="timeline-content">
//               <h3>Innovation Unveiled</h3>
//               <p>
//                 Our patented Nano-Enamel™ technology debuted, earning the 
//                 <em>Luxury Innovation Award</em> at Monaco Health Summit.
//               </p>
//               <div className="timeline-ornament"></div>
//             </div>
//           </div>

//           {/* Timeline Item 3 */}
//           <div className="timeline-item" style={{ '--accent-color': '#1faee2' }}>
//             <div className="timeline-year">2023</div>
//             <div className="timeline-content">
//               <h3>Global Icon</h3>
//               <p>
//                 Featured in Vogue's "21 Most Luxurious Wellness Brands" and adored by 
//                 celebrities and dentists alike.
//               </p>
//               <div className="timeline-ornament"></div>
//             </div>
//           </div>
//         </div>

//         {/* CTA */}
//         <button className="luxury-cta">
//           <span>Explore the Collection</span>
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//             <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//           </svg>
//           <div className="cta-hover-effect"></div>
//         </button>
//       </div>
//     </section>
//   );
// };

// export default OurStoryLuxury;

import React, { useEffect } from 'react';
import './OurStory.css';

const OurStoryUltimate = () => {
  useEffect(() => {
    // Dynamic particle creation
    const createParticles = () => {
      const particlesContainer = document.querySelector('.particles-container');
      const particleCount = 30;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        
        // Random properties
        const size = Math.random() * 15 + 5;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 10;
        const color = `hsl(${Math.random() * 60 + 190}, 70%, 60%)`;
        
        particle.style.cssText = `
          width: ${size}px;
          height: ${size}px;
          background: ${color};
          animation-duration: ${duration}s;
          animation-delay: ${delay}s;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
        `;
        
        particlesContainer.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  return (
    <section className="ultimate-story">
      {/* Dynamic Background Elements */}
      <div className="particles-container"></div>
      <div className="liquid-shape shape-1"></div>
      <div className="liquid-shape shape-2"></div>
      <div className="gradient-mesh"></div>
      
      {/* Main Content */}
      <div className="crystal-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="header-line"></div>
          <h1 className="section-title">
            <span className="title-highlight">OUR</span> STORY
          </h1>
          <div className="header-line"></div>
        </div>

        {/* Timeline */}
        <div className="holographic-timeline">
          {/* Timeline Item 1 */}
          <div className="timeline-card" style={{ '--accent-color': '#2098b2' }}>
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="year-badge">2015</div>
              <h3>The Genesis</h3>
              <p>
                Born in a Swiss lab, RELIDENT fused dental science with luxury aesthetics, 
                redefining oral care as an experience.
              </p>
              <div className="card-ornament"></div>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="timeline-card" style={{ '--accent-color': '#32b561' }}>
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="year-badge">2018</div>
              <h3>Innovation Unveiled</h3>
              <p>
                Our patented Nano-Enamel™ technology debuted, earning the 
                <em>Luxury Innovation Award</em> at Monaco Health Summit.
              </p>
              <div className="card-ornament"></div>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="timeline-card" style={{ '--accent-color': '#1faee2' }}>
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="year-badge">2023</div>
              <h3>Global Icon</h3>
              <p>
                Featured in Vogue's "21 Most Luxurious Wellness Brands" and adored by 
                celebrities and dentists alike.
              </p>
              <div className="card-ornament"></div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button className="neon-cta">
          <span>Explore the Collection</span>
          <div className="cta-light-effect"></div>
        </button>
      </div>
    </section>
  );
};

export default OurStoryUltimate;