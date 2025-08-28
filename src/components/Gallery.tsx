import React, { useRef } from 'react';

const galleryImages = [
  { src: '/gallery1.jpg', alt: 'Memory 1' },
  { src: '/gallery2.jpg', alt: 'Memory 2' },
  { src: '/gallery3.jpg', alt: 'Memory 3' },
  { src: '/gallery4.jpg', alt: 'Memory 4' },
  { src: '/gallery5.jpg', alt: 'Memory 5' },
  { src: '/gallery6.jpg', alt: 'Memory 6' }
];

// No per-item transforms for the 3x2 grid — keep items even
const layouts: string[] = [];

const Gallery: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  // Using fixed aspect cells (via aspectClass) — images will be fitted using object-contain

  return (
    <section ref={galleryRef} className="py-20 bg-gradient-to-b from-rose-50 to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-200 via-pink-200 to-purple-200"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="gallery-title text-4xl md:text-5xl font-playfair font-bold text-burgundy-800 mb-4">
            Captured Moments
          </h2>
          <p className="text-base md:text-lg text-rose-700 font-inter max-w-2xl mx-auto leading-relaxed">
            A mosaic of moments — an imperfect, hand-tiled grid of memories.
          </p>
        </div>

        {/* Mobile: flex 2 columns x 3 rows (wrap). md+: strict 3x2 grid */}
        <div className="gallery-grid flex flex-wrap justify-center md:grid md:grid-cols-3 md:grid-rows-2 gap-3 md:h-[60vh]">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item w-[94%] sm:w-1/2 md:w-full flex justify-center relative overflow-hidden rounded-lg shadow-md">
              <div className="w-full h-full overflow-hidden bg-transparent p-1 flex items-center justify-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain block"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800';
                  }}
                />
              </div>

              <div className="absolute left-3 bottom-3 bg-black/30 text-white px-2 py-0.5 rounded-md opacity-95 text-xs">
                {image.alt}
              </div>
            </div>
          ))}
        </div>

        {/* Decorations */}
        <div className="absolute top-8 right-8 w-20 h-20 bg-rose-200 rounded-full opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-16 left-8 w-16 h-16 bg-purple-200 rounded-full opacity-30 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Gallery;