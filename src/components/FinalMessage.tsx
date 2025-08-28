import React, { useRef } from 'react';
import { Heart, Infinity } from 'lucide-react';

const FinalMessage: React.FC = () => {
  const finalRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={finalRef} 
      className="py-20 bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-rose-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-200 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating Hearts */}
      {[...Array(8)].map((_, i) => (
        <Heart
          key={i}
          className="floating-final-heart absolute text-rose-300 opacity-40"
          size={16 + i * 2}
          fill="currentColor"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-rose-200">
          <div className="infinity-icon flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-rose-400 to-purple-400 rounded-full flex items-center justify-center shadow-xl">
              <Infinity className="text-white" size={32} />
            </div>
          </div>

          <h2 className="final-title text-4xl md:text-5xl font-playfair font-bold text-burgundy-800 mb-8">
            Forever & Always
          </h2>

          <div className="final-message space-y-6 mb-12">
            <p className="text-xl md:text-2xl text-rose-700 font-inter leading-relaxed">
              Thank you for being my partner in this incredible journey of life. Every day with you feels like heaven, every moment a treasure to love.
            </p>
            
            <p className="text-lg text-rose-600 font-inter leading-relaxed max-w-2xl mx-auto">
              As we celebrate this special milestone, I'm reminded that our love story is just beginning. Here's to many more years of adventures, laughter, growth, and unconditional love.
            </p>

            <p className="text-xl text-burgundy-800 font-inter font-medium">
              You are my heart, my soul, my everything. I love you more than words could ever express.
            </p>
          </div>

          <div className="final-signature">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Heart className="text-rose-500" size={24} fill="currentColor" />
              <span className="text-2xl font-playfair italic text-burgundy-700">
                With all my love,
              </span>
              <Heart className="text-rose-500" size={24} fill="currentColor" />
            </div>
            
            <div className="text-3xl font-playfair font-bold text-burgundy-800 mb-8">
              Your Hubby, Bubu
            </div>

            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-400 to-purple-400 text-white px-8 py-4 rounded-full shadow-lg">
              <Heart size={20} fill="currentColor" />
              <span className="font-inter font-medium">
                Happy Anniversary, Uma
              </span>
              <Heart size={20} fill="currentColor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalMessage;