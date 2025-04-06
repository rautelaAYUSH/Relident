import React from 'react';
import './Footer.css';

const LuxuryFooter = () => {
  return (
    <footer className="luxury-footer">
      <div className="footer-accent"></div>

      <div className="footer-content">
        <div className="brand-column">
          <h3 className="logo">RELIDENT</h3>
          <p className="tagline">
            Elevate your oral care with <span>clinically proven luxury</span>.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="nav-column">
          <h4 className="column-title">Navigation</h4>
          <ul>
            <li><a href="#">Products</a></li>
            <li><a href="#">Science</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Journal</a></li>
          </ul>
        </div>

        <div className="support-column">
          <h4 className="column-title">Support</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Returns & Exchanges</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div className="newsletter-column">
          <h4 className="column-title">Join Our Community</h4>
          <p>Receive exclusive offers and oral care insights.</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="newsletter-input"
              required 
            />
            <button type="submit" className="newsletter-button">
              <span>Subscribe</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </form>
        </div>
      </div>

      <div className="copyright">
        <div className="legal-links">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms of Service</a>
          <span>|</span>
          <a href="#">Accessibility</a>
        </div>
        <p>&copy; {new Date().getFullYear()} RELIDENT. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default LuxuryFooter;