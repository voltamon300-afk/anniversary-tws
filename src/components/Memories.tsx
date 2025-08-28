import React from 'react';
import { Quote } from 'lucide-react';

const memories = [
  {
    title: 'Our First Date',
    text: "I remember being so nervous, but the moment I saw your smile, everything felt perfect. Then we held hands and walked. I immersed into you and the world went oblivious.",
    side: 'left'
  },
  {
    title: 'Late Night Conversations',
    text: "Those midnight texts we used to have in the first year. I miss those so much. There was a different chemistry at night, and I loved that energy. What if we do so again ?",
    side: 'right'
  },
  {
    title: 'Your Laugh',
    text: "The first time I made you truly laugh, I knew I wanted to be the reason for that sound and make you laugh a little harder.",
    side: 'left'
  },
  {
    title: 'Building Dreams',
  text: "Dreaming up our future home, charting adventures around the world, and turning countless little fantasies into plans together.",
    side: 'right'
  }
];

const quotes = [
  'You are my today and all of my tomorrows.',
  'In all the world, there is no heart for me like yours.',
  'Every love story is beautiful, but ours is my favorite.',
  'You are my sun, my moon, and all my stars.'
];

const Memories: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 via-rose-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="memories-title text-5xl font-playfair font-bold text-burgundy-800 mb-6">Treasured Memories</h2>
          <p className="text-xl text-rose-700 font-inter max-w-2xl mx-auto leading-relaxed">
            The moments that made our hearts flutter and souls connect. These memories are the foundation of our everlasting love.
          </p>
        </div>

        <div className="space-y-12 mb-20">
          {memories.map((memory, index) => (
            <div key={index} className={`memory-card flex items-center gap-8 ${memory.side} ${memory.side === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className="w-full">
                <div className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-rose-200 ${memory.side === 'right' ? 'ml-auto' : ''}`}>
                  <h3 className="text-2xl font-playfair font-bold text-burgundy-800 mb-4">{memory.title}</h3>
                  <p className="text-rose-600 font-inter leading-relaxed text-lg">{memory.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-playfair font-bold text-burgundy-800 mb-12">Words of Love</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quotes.map((quote, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-rose-200">
                <Quote className="text-rose-400 mb-4 mx-auto" size={24} fill="currentColor" />
                <p className={`quote-${index} text-lg font-inter text-burgundy-700 italic leading-relaxed`}>{quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memories;