import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Gallery from './components/Gallery';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
