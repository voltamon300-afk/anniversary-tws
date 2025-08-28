import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin, Heart } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  location?: string;
  image: string;
  side: 'left' | 'right';
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '2020',
    title: 'First Meeting',
    description: 'The day our hearts first connected. A chance encounter that changed everything and began our beautiful love story.',
    location: 'Central Park, NYC',
    image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600',
    side: 'left'
  },
  {
    year: '2021',
    title: 'First Trip Together',
    description: 'Our first adventure as a couple. Exploring new places, creating memories, and falling deeper in love.',
    location: 'Paris, France',
    image: 'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=600',
    side: 'right'
  },
  {
    year: '2022',
    title: 'Moving In Together',
    description: 'Building our first home together. Every day became a celebration of our growing love and partnership.',
    location: 'San Francisco, CA',
    image: 'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=600',
    side: 'left'
  },
  {
    year: '2023',
    title: 'The Proposal',
    description: 'The moment I knew I wanted to spend forever with you. A perfect evening that marked the beginning of our engagement.',
    location: 'Santorini, Greece',
    image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600',
    side: 'right'
  }
];

const Timeline: React.FC = () => {
  // Static timeline (animations removed)

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-rose-50 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-playfair font-bold text-burgundy-800 mb-6">
            Our Journey Together
          </h2>
          <p className="text-xl text-rose-700 font-inter max-w-2xl mx-auto leading-relaxed">
            Every milestone in our relationship has been a step closer to forever. Here are the moments that defined our love story.
          </p>
        </div>

        <div className="relative">
          {/* Central timeline line */}
          <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-rose-400 to-purple-400 h-full"></div>

          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`timeline-event flex items-center ${event.side} ${
                  event.side === 'left' ? 'flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`w-5/12 ${event.side === 'left' ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-rose-200 hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="text-rose-500" size={20} />
                      <span className="text-2xl font-playfair font-bold text-burgundy-800">
                        {event.year}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-playfair font-bold text-burgundy-700 mb-3">
                      {event.title}
                    </h3>
                    
                    <p className="text-rose-600 font-inter leading-relaxed mb-4">
                      {event.description}
                    </p>
                    
                    {event.location && (
                      <div className="flex items-center gap-2 text-rose-500">
                        <MapPin size={16} />
                        <span className="font-inter text-sm">{event.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Central dot */}
                <div className="timeline-dot relative z-10 w-6 h-6 bg-white rounded-full border-4 border-rose-400 shadow-lg">
                  <Heart className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-rose-500" size={12} fill="currentColor" />
                </div>

                {/* Image */}
                <div className={`w-5/12 ${event.side === 'left' ? 'text-left pl-8' : 'text-right pr-8'}`}>
                  <div className="timeline-image rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;