import React from 'react';
import Navbar from './components/Header';
import Hero from "./pages/Hero";
import OurStory from "./pages/OurStory";
import Product from "./pages/Products";
import Testimonials from "./pages/Testimonials";
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        {/* Your page content goes here */}
        <Hero />
        <OurStory />
        <Product />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;

