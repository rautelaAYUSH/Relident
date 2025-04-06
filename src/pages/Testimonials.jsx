// import React, { useState } from 'react';
// import './Testimonials.css';

// const LuxuryTestimonials = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const testimonials = [
//     {
//       id: 1,
//       quote: "Relident ER transformed my dental practice. Patients with sensitivity now experience zero discomfort during procedures—a game changer.",
//       author: "Dr. Aanya Patel",
//       title: "Endodontist • Mumbai",
//       product: "/product_1.png",
//       accent: "#2098b2",
//       rating: 5
//     },
//     {
//       id: 2,
//       quote: "The charcoal formula outperforms professional whitening treatments I've paid $500 for. My celebrity clients demand it in their green rooms.",
//       author: "Dr. Michael Zhang",
//       title: "Celebrity Cosmetic Dentist • London",
//       product: "/product_2.png",
//       accent: "#32b561",
//       rating: 5
//     },
//     {
//       id: 3,
//       quote: "Finally, a toothpaste worthy of my bathroom counter. The packaging alone makes it a conversation starter at dinner parties.",
//       author: "Elena Petrov",
//       title: "Lifestyle Editor • Architectural Digest",
//       product: "/product_3.png",
//       accent: "#1faee2",
//       rating: 4
//     }
//   ];

//   const nextTestimonial = () => {
//     setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//   };

//   const prevTestimonial = () => {
//     setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
//   };

//   return (
//     <div className="luxury-testimonials-container">
//       {/* Dynamic Background */}
//       <div 
//         className="testimonial-bg-overlay" 
//         style={{ backgroundColor: `${testimonials[activeIndex].accent}10` }}
//       ></div>

//       {/* Glassmorphism Header */}
//       <header className="luxury-testimonials-header">
//         <h1>TESTIMONIALS</h1>
//         <div className="header-decoration">
//           <div className="line"></div>
//           <div className="diamond"></div>
//           <div className="line"></div>
//         </div>
//         <p>Voices of Excellence</p>
//       </header>

//       {/* Main Content */}
//       <div className="testimonial-viewport">
//         {/* Navigation Arrows */}
//         <button className="nav-arrow prev" onClick={prevTestimonial}>
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//             <path d="M15 18L9 12L15 6" stroke="#15457f" strokeWidth="2" strokeLinecap="round"/>
//           </svg>
//         </button>

//         {/* Testimonial Showcase */}
//         <div className="testimonial-showcase">
//           <div 
//             className="testimonial-track"
//             style={{ transform: `translateX(-${activeIndex * 100}%)` }}
//           >
//             {testimonials.map((testimonial) => (
//               <div 
//                 key={testimonial.id} 
//                 className="testimonial-slide"
//                 style={{ borderTop: `4px solid ${testimonial.accent}` }}
//               >
//                 <div className="product-display">
//                   <div 
//                     className="product-glow" 
//                     style={{ backgroundColor: `${testimonial.accent}20` }}
//                   ></div>
//                   <img src={testimonial.product} alt={testimonial.author} />
//                 </div>

//                 <div className="testimonial-content">
//                   <div className="rating">
//                     {[...Array(5)].map((_, i) => (
//                       <span 
//                         key={i} 
//                         className={`star ${i < testimonial.rating ? 'filled' : ''}`}
//                       >
//                         ★
//                       </span>
//                     ))}
//                   </div>

//                   <blockquote>
//                     <p>{testimonial.quote}</p>
//                   </blockquote>

//                   <div className="author">
//                     <div className="author-line" style={{ backgroundColor: testimonial.accent }}></div>
//                     <div>
//                       <h3>{testimonial.author}</h3>
//                       <p>{testimonial.title}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <button className="nav-arrow next" onClick={nextTestimonial}>
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//             <path d="M9 18L15 12L9 6" stroke="#15457f" strokeWidth="2" strokeLinecap="round"/>
//           </svg>
//         </button>
//       </div>

//       {/* Luxury Indicators */}
//       <div className="luxury-indicators">
//         {testimonials.map((_, index) => (
//           <button
//             key={index}
//             className={`indicator ${index === activeIndex ? 'active' : ''}`}
//             onClick={() => setActiveIndex(index)}
//             aria-label={`View testimonial ${index + 1}`}
//           >
//             <div className="indicator-progress" style={{ backgroundColor: testimonials[index].accent }}></div>
//           </button>
//         ))}
//       </div>

//       {/* Absolute Positioned Elements */}
//       <div className="luxury-decoration">
//         <div className="circle-accent" style={{ backgroundColor: "#2098b210" }}></div>
//         <div className="circle-accent" style={{ backgroundColor: "#32b56110" }}></div>
//       </div>
//     </div>
//   );
// };

// export default LuxuryTestimonials;



// import React, { useState } from 'react';
// import './Testimonials.css';

// const LuxuryTestimonials = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const testimonials = [
//     {
//       id: 1,
//       quote: "Relident ER transformed my dental practice. Patients with sensitivity now experience zero discomfort during procedures—a game changer.",
//       author: "Dr. Aanya Patel",
//       title: "Endodontist • Mumbai",
//       accent: "#2098b2",
//       rating: 5
//     },
//     {
//       id: 2,
//       quote: "The charcoal formula outperforms professional whitening treatments I've paid $500 for. My celebrity clients demand it in their green rooms.",
//       author: "Dr. Michael Zhang",
//       title: "Celebrity Cosmetic Dentist • London",
//       accent: "#32b561",
//       rating: 5
//     },
//     {
//       id: 3,
//       quote: "Finally, a toothpaste worthy of my bathroom counter. The packaging alone makes it a conversation starter at dinner parties.",
//       author: "Elena Petrov",
//       title: "Lifestyle Editor • Architectural Digest",
//       accent: "#1faee2",
//       rating: 4
//     }
//   ];

//   const nextTestimonial = () => {
//     setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//   };

//   const prevTestimonial = () => {
//     setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
//   };

//   return (
//     <div className="luxury-testimonials">
//       {/* Animated Background Gradient */}
//       <div 
//         className="testimonial-bg" 
//         style={{ 
//           background: `linear-gradient(135deg, ${testimonials[activeIndex].accent}10, #f8f8f8)`
//         }}
//       ></div>

//       {/* Header */}
//       <div className="luxury-header">
//         <div className="header-line"></div>
//         <h1>VOICES OF EXCELLENCE</h1>
//         <div className="header-line"></div>
//       </div>

//       {/* Testimonial Carousel */}
//       <div className="testimonial-carousel">
//         <button className="nav-arrow prev" onClick={prevTestimonial}>
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//             <path d="M15 18L9 12L15 6" stroke="#15457f" strokeWidth="2" strokeLinecap="round"/>
//           </svg>
//         </button>

//         <div className="testimonial-track">
//           {testimonials.map((testimonial, index) => (
//             <div 
//               key={testimonial.id}
//               className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
//               style={{ borderColor: testimonial.accent }}
//             >
//               <div className="rating">
//                 {[...Array(5)].map((_, i) => (
//                   <span 
//                     key={i} 
//                     className={`star ${i < testimonial.rating ? 'filled' : ''}`}
//                     style={{ color: i < testimonial.rating ? testimonial.accent : '#ddd' }}
//                   >
//                     ★
//                   </span>
//                 ))}
//               </div>
              
//               <blockquote>
//                 <p>{testimonial.quote}</p>
//               </blockquote>

//               <div className="author">
//                 <div className="accent-line" style={{ backgroundColor: testimonial.accent }}></div>
//                 <div>
//                   <h3>{testimonial.author}</h3>
//                   <p>{testimonial.title}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <button className="nav-arrow next" onClick={nextTestimonial}>
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//             <path d="M9 18L15 12L9 6" stroke="#15457f" strokeWidth="2" strokeLinecap="round"/>
//           </svg>
//         </button>
//       </div>

//       {/* Indicators */}
//       <div className="indicators">
//         {testimonials.map((_, index) => (
//           <button
//             key={index}
//             className={`indicator ${index === activeIndex ? 'active' : ''}`}
//             onClick={() => setActiveIndex(index)}
//           >
//             <div 
//               className="indicator-progress" 
//               style={{ 
//                 backgroundColor: testimonials[index].accent,
//                 opacity: index === activeIndex ? 1 : 0.3
//               }}
//             ></div>
//           </button>
//         ))}
//       </div>

//       {/* Decorative Elements */}
//       <div className="luxury-decoration">
//         <div className="circle" style={{ backgroundColor: "#2098b210" }}></div>
//         <div className="circle" style={{ backgroundColor: "#32b56110" }}></div>
//       </div>
//     </div>
//   );
// };

// export default LuxuryTestimonials;

import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const DarkLuxuryTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Relident ER transformed my dental practice. Patients with sensitivity now experience zero discomfort during procedures—a game changer.",
      author: "Dr. Aanya Patel",
      title: "Endodontist • Mumbai",
      accent: "#2098b2",
      rating: 5
    },
    {
      id: 2,
      quote: "The charcoal formula outperforms professional whitening treatments I've paid $500 for. My celebrity clients demand it in their green rooms.",
      author: "Dr. Michael Zhang",
      title: "Celebrity Cosmetic Dentist • London",
      accent: "#32b561",
      rating: 5
    },
    {
      id: 3,
      quote: "Finally, a toothpaste worthy of my bathroom counter. The packaging alone makes it a conversation starter at dinner parties.",
      author: "Elena Petrov",
      title: "Lifestyle Editor • Architectural Digest",
      accent: "#1faee2",
      rating: 4
    }
  ];

  // Auto-rotate every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="dark-luxury-testimonials">
      {/* Animated Dark Background */}
      <div 
        className="dark-bg-overlay" 
        style={{ 
          background: `radial-gradient(circle at 75% 30%, ${testimonials[activeIndex].accent}05, #0a0e17)`
        }}
      ></div>

      {/* Gold Decorative Border */}
      <div className="luxury-border"></div>

      {/* Header */}
      <div className="dark-header">
        <div className="gold-line"></div>
        <h1>TESTIMONIALS</h1>
        <div className="gold-line"></div>
      </div>

      {/* Testimonial Carousel */}
      <div className="dark-carousel">
        <button className="dark-nav-arrow prev" onClick={prevTestimonial}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#d4af37" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="dark-testimonial-track">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`dark-testimonial-card ${index === activeIndex ? 'active' : ''}`}
              style={{ 
                borderLeft: `4px solid ${testimonial.accent}`,
                opacity: index === activeIndex ? 1 : 0
              }}
            >
              <div className="dark-rating">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={`dark-star ${i < testimonial.rating ? 'filled' : ''}`}
                    style={{ color: i < testimonial.rating ? testimonial.accent : '#333' }}
                  >
                    ★
                  </span>
                ))}
              </div>
              
              <blockquote>
                <p>{testimonial.quote}</p>
              </blockquote>

              <div className="dark-author">
                <div className="dark-accent-line" style={{ backgroundColor: testimonial.accent }}></div>
                <div>
                  <h3>{testimonial.author}</h3>
                  <p>{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="dark-nav-arrow next" onClick={nextTestimonial}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="#d4af37" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Gold Indicators */}
      <div className="dark-indicators">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dark-indicator ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            <div 
              className="dark-indicator-progress" 
              style={{ 
                backgroundColor: testimonials[index].accent,
                width: index === activeIndex ? '100%' : '0%',
                transition: index === activeIndex ? 'width 10s linear' : 'none'
              }}
            ></div>
          </button>
        ))}
      </div>

      {/* Animated Gold Particles */}
      <div className="gold-particles">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className="particle" 
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default DarkLuxuryTestimonials;