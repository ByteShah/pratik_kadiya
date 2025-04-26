import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Reels from './components/Reels';
import Services from './components/Services';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <Hero />
      <About />
      <Reels />
      <Services />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;