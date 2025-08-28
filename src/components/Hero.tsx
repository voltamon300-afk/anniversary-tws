import React, { useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const dateRef = useRef<HTMLParagraphElement>(null);
  const heartsRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      />
      
      {/* Floating Hearts */}
      <div ref={heartsRef} className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className={`floating-heart absolute text-rose-400 opacity-60`}
            size={24 + i * 4}
            fill="currentColor"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl font-playfair font-bold text-burgundy-800 mb-6 leading-tight"
          style={{ color: '#8B0000' }}
        >
          Our Love Story
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-rose-700 mb-8 font-inter font-light max-w-2xl mx-auto leading-relaxed"
        >
          Celebrating the beautiful journey we've shared together, filled with love, laughter, and countless precious memories.
        </p>
        
        <div 
          ref={dateRef}
          className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg border border-rose-200"
        >
          <Heart className="text-rose-500" size={20} fill="currentColor" />
          <span className="text-lg font-inter font-medium text-burgundy-700">
            Anniversary • August 28, 2025
          </span>
          <Heart className="text-rose-500" size={20} fill="currentColor" />
        </div>
      </div>
    </section>
  );
};

export default Hero;