import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import OrderNow from './components/OrderNow';
import Footer from './components/Footer';
import { businessName } from './constants/content';

// Add these styles to make the animations work
import './styles/animations.css';

function App() {
  useEffect(() => {
    // Update document title
    document.title = businessName;
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);
    
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      elementsToAnimate.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);
  
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Products />
      <Features />
      <Testimonials />
      <OrderNow />
      <Footer />
    </div>
  );
}

export default App;