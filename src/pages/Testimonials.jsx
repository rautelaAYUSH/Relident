// import React, { useState, useEffect } from 'react';
// import './Testimonials.css';

// const Testimonials = () => {
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

//   // Auto-rotate every 10 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//     }, 10000);
//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   const nextTestimonial = () => {
//     setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//   };

//   const prevTestimonial = () => {
//     setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
//   };

//   return (
//     <div className="relident-testimonials-container">
//       {/* Animated Dark Background */}
//       <div 
//         className="relident-bg-overlay" 
//         style={{ 
//           background: `radial-gradient(circle at 75% 30%, ${testimonials[activeIndex].accent}05, #0a0e17)`
//         }}
//       ></div>

//       {/* Gold Decorative Border */}
//       <div className="relident-luxury-border"></div>

//       {/* Header */}
//       <div className="relident-header">
//         <div className="relident-gold-line"></div>
//         <h1 className="relident-title">TESTIMONIALS</h1>
//         <div className="relident-gold-line"></div>
//       </div>

//       {/* Testimonial Carousel */}
//       <div className="relident-carousel">
//         <button className="relident-nav-arrow relident-prev" onClick={prevTestimonial}>
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//             <path d="M15 18L9 12L15 6" stroke="#d4af37" strokeWidth="2" strokeLinecap="round"/>
//           </svg>
//         </button>

//         <div className="relident-testimonial-track">
//           {testimonials.map((testimonial, index) => (
//             <div 
//               key={testimonial.id}
//               className={`relident-testimonial-card ${index === activeIndex ? 'relident-active' : ''}`}
//               style={{ 
//                 borderLeft: `4px solid ${testimonial.accent}`,
//                 opacity: index === activeIndex ? 1 : 0
//               }}
//             >
//               <div className="relident-rating">
//                 {[...Array(5)].map((_, i) => (
//                   <span 
//                     key={i} 
//                     className={`relident-star ${i < testimonial.rating ? 'relident-filled' : ''}`}
//                     style={{ color: i < testimonial.rating ? testimonial.accent : '#333' }}
//                   >
//                     ★
//                   </span>
//                 ))}
//               </div>
              
//               <blockquote className="relident-quote">
//                 <p className="relident-quote-text">{testimonial.quote}</p>
//               </blockquote>

//               <div className="relident-author">
//                 <div className="relident-accent-line" style={{ backgroundColor: testimonial.accent }}></div>
//                 <div className="relident-author-info">
//                   <h3 className="relident-author-name">{testimonial.author}</h3>
//                   <p className="relident-author-title">{testimonial.title}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <button className="relident-nav-arrow relident-next" onClick={nextTestimonial}>
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//             <path d="M9 18L15 12L9 6" stroke="#d4af37" strokeWidth="2" strokeLinecap="round"/>
//           </svg>
//         </button>
//       </div>

//       {/* Gold Indicators */}
//       <div className="relident-indicators">
//         {testimonials.map((_, index) => (
//           <button
//             key={index}
//             className={`relident-indicator ${index === activeIndex ? 'relident-active' : ''}`}
//             onClick={() => setActiveIndex(index)}
//           >
//             <div 
//               className="relident-indicator-progress" 
//               style={{ 
//                 backgroundColor: testimonials[index].accent,
//                 width: index === activeIndex ? '100%' : '0%',
//                 transition: index === activeIndex ? 'width 10s linear' : 'none'
//               }}
//             ></div>
//           </button>
//         ))}
//       </div>

//       {/* Animated Gold Particles */}
//       <div className="relident-particles">
//         {[...Array(8)].map((_, i) => (
//           <div 
//             key={i} 
//             className="relident-particle" 
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animationDelay: `${i * 0.5}s`
//             }}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Testimonials;


import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
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
    <div className="relident-testimonials-container">
      {/* Animated Background */}
      <div 
        className="relident-bg-overlay" 
        style={{ 
          background: `radial-gradient(circle at 75% 30%, ${testimonials[activeIndex].accent}15, #f5f5f5)`
        }}
      ></div>

      {/* Decorative Border */}
      <div className="relident-luxury-border"></div>

      {/* Header */}
      <div className="relident-header">
        <div className="relident-gold-line"></div>
        <h1 className="relident-title">TESTIMONIALS</h1>
        <div className="relident-gold-line"></div>
      </div>

      {/* Testimonial Carousel */}
      <div className="relident-carousel">
        <button className="relident-nav-arrow relident-prev" onClick={prevTestimonial}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#15457f" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="relident-testimonial-track">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`relident-testimonial-card ${index === activeIndex ? 'relident-active' : ''}`}
              style={{ 
                borderLeft: `4px solid ${testimonial.accent}`,
                opacity: index === activeIndex ? 1 : 0
              }}
            >
              <div className="relident-rating">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={`relident-star ${i < testimonial.rating ? 'relident-filled' : ''}`}
                    style={{ color: i < testimonial.rating ? testimonial.accent : '#999' }}
                  >
                    ★
                  </span>
                ))}
              </div>
              
              <blockquote className="relident-quote">
                <p className="relident-quote-text">{testimonial.quote}</p>
              </blockquote>

              <div className="relident-author">
                <div className="relident-accent-line" style={{ backgroundColor: testimonial.accent }}></div>
                <div className="relident-author-info">
                  <h3 className="relident-author-name">{testimonial.author}</h3>
                  <p className="relident-author-title">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="relident-nav-arrow relident-next" onClick={nextTestimonial}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="#15457f" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Indicators */}
      <div className="relident-indicators">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`relident-indicator ${index === activeIndex ? 'relident-active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            <div 
              className="relident-indicator-progress" 
              style={{ 
                backgroundColor: testimonials[index].accent,
                width: index === activeIndex ? '100%' : '0%',
                transition: index === activeIndex ? 'width 10s linear' : 'none'
              }}
            ></div>
          </button>
        ))}
      </div>

      {/* Animated Particles */}
      <div className="relident-particles">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className="relident-particle" 
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

export default Testimonials;


