import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Memories from './components/Memories';
import FinalMessage from './components/FinalMessage';
import ParticleBackground from './components/ParticleBackground';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 relative overflow-x-hidden">
      <ParticleBackground />
      <Hero />
      <Gallery />
      <Memories />
      <FinalMessage />
    </div>
  );
}

export default App;
