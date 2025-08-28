import React from 'react';

const ParticleBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className={`particle absolute animate-float`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${4 + Math.random() * 8}px`,
            height: `${4 + Math.random() * 8}px`,
            borderRadius: '50%',
            background: `linear-gradient(45deg, ${Math.random() > 0.5 ? '#F8BBD9' : '#FFB3BA'}, ${Math.random() > 0.5 ? '#FFD700' : '#E6E6FA'})`,
            opacity: 0.6
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;