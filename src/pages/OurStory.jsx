// import React from "react";
// import "./OurStory.css";

// const UltraLuxuryStory = () => {
//   return (
//     <div className="ultra-luxury-story">
//       {/* Animated Background Layer */}
//       <div className="luxury-bg-overlay"></div>
      
//       {/* Glowing Centerpiece */}
//       <div className="story-centerpiece">
//         <h1>
//           {/* <span className="text-stroke">OUR</span> */}
//           <span className="text-fill">OUR STORY</span>
//         </h1>
        
//         {/* Floating 3D Cards */}
//         <div className="luxury-card-grid">
//           {[
//             {
//               icon: "/product_1.png",
//               title: "HIMALAYAN HERITAGE",
//               text: "Sourced from Uttarakhand’s rare herbs, filtered through Swiss microfiltration.",
//               bg: "#2098b210"
//             },
//             {
//               icon: "/product_2.png",
//               title: "NEON-TECH WHITENING",
//               text: "Laser-calibrated nanocrystals (22K/tube) for zero-sensitivity brilliance.",
//               bg: "#32b56110"
//             },
//             {
//               icon: "/product_3.png",
//               title: "PACKAGING",
//               text: "FSC-certified black glass with 24k gold typography.",
//               bg: "#1faee210"
//             }
//           ].map((item, index) => (
//             <div 
//               key={index} 
//               className="luxury-card"
//               style={{ '--card-bg': item.bg }}
//             >
//               <div className="card-icon">
//                 <img src={item.icon} alt={item.title} />
//               </div>
//               <h3>{item.title}</h3>
//               <p>{item.text}</p>
//               <div className="card-glow"></div>
//             </div>
//           ))}
//         </div>

//         {/* Micro-interaction Button */}
//         <button className="luxury-cta">
//           <span>EXPLORE ALL PRODUCTS</span>
//           <div className="cta-arrow">→</div>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UltraLuxuryStory;


// import React from 'react';
// import './OurStory.css'; // Import CSS (shown below)

// const OurStory = () => {
//   return (
//     <section className="our-story-section">
//       {/* Background Overlay */}
//       <div className="story-overlay"></div>

//       {/* Content Container */}
//       <div className="story-content">
//         {/* Section Title */}
//         <h2 className="story-title">
//           <span className="title-accent">OUR</span> STORY
//         </h2>

//         {/* Timeline/Story Blocks */}
//         <div className="story-timeline">
//           {/* Story Item 1 */}
//           <div className="story-item">
//             <div className="item-year" style={{ color: '#1faee2' }}>2015</div>
//             <div className="item-details">
//               <h3 style={{ color: '#32b561' }}>The Beginning</h3>
//               <p>
//                 Founded by a team of dentists and chemists, RELIDENT began with a mission: 
//                 to merge clinical expertise with luxury oral care.
//               </p>
//             </div>
//           </div>

//           {/* Story Item 2 */}
//           <div className="story-item">
//             <div className="item-year" style={{ color: '#1faee2' }}>2018</div>
//             <div className="item-details">
//               <h3 style={{ color: '#32b561' }}>Breakthrough Formula</h3>
//               <p>
//                 Our patented enamel-strengthening technology launched, earning accolades 
//                 from dental professionals worldwide.
//               </p>
//             </div>
//           </div>

//           {/* Story Item 3 */}
//           <div className="story-item">
//             <div className="item-year" style={{ color: '#1faee2' }}>2023</div>
//             <div className="item-details">
//               <h3 style={{ color: '#32b561' }}>Global Recognition</h3>
//               <p>
//                 RELIDENT is now trusted by over 1 million users and featured in 
//                 <em>Luxury Health Magazine</em>’s “Best of Beauty” list.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* CTA Button */}
//         <button className="story-cta" style={{ backgroundColor: '#2098b2' }}>
//           Discover Our Products
//         </button>
//       </div>
//     </section>
//   );
// };

// export default OurStory;

import React from 'react';
import './OurStory.css'; // Import CSS (shown below)

const OurStoryLuxury = () => {
  return (
    <section className="our-story-luxury">
      {/* Decorative Accents */}
      <div className="luxury-accent-line"></div>
      <div className="luxury-dot-grid"></div>

      {/* Main Content */}
      <div className="luxury-content">
        {/* Animated Title */}
        <h1 className="luxury-title">
          {/* <span className="luxury-title-stroke">OUR STORY</span> */}
          <span className="luxury-title-fill">OUR STORY</span>
        </h1>

        {/* Timeline with Cards */}
        <div className="luxury-timeline">
          {/* Card 1 */}
          <div className="timeline-card" style={{ borderTop: '4px solid #2098b2' }}>
            <div className="card-year" style={{ color: '#1faee2' }}>2015</div>
            <h3 style={{ color: '#32b561' }}>The Genesis</h3>
            <p>
              Born in a Swiss lab, RELIDENT fused dental science with luxury aesthetics, 
              redefining oral care as an experience.
            </p>
          </div>

          {/* Card 2 */}
          <div className="timeline-card" style={{ borderTop: '4px solid #32b561' }}>
            <div className="card-year" style={{ color: '#1faee2' }}>2018</div>
            <h3 style={{ color: '#2098b2' }}>Innovation Unveiled</h3>
            <p>
              Our patented Nano-Enamel™ technology debuted, earning the 
              *Luxury Innovation Award* at Monaco Health Summit.
            </p>
          </div>

          {/* Card 3 */}
          <div className="timeline-card" style={{ borderTop: '4px solid #1faee2' }}>
            <div className="card-year" style={{ color: '#32b561' }}>2023</div>
            <h3 style={{ color: '#2098b2' }}>Global Icon</h3>
            <p>
              Featured in Vogue’s “21 Most Luxurious Wellness Brands” and adored by 
              celebrities and dentists alike.
            </p>
          </div>
        </div>

        {/* CTA */}
        <button className="luxury-cta">
          <span>Explore the Collection</span>
          <div className="cta-underline"></div>
        </button>
      </div>
    </section>
  );
};

export default OurStoryLuxury;