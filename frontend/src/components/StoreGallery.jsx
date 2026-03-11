import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { storeImages } from '../mock/mockData';
import { Button } from './ui/button';

const StoreGallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">A Glance at our Store</h2>
        </div>

        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white shadow-lg"
          >
            <ChevronLeft size={20} />
          </Button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {storeImages.map((image) => (
              <div
                key={image.id}
                className="flex-shrink-0 w-[400px] h-[300px] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={image.image}
                  alt={`Store ${image.id}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white shadow-lg"
          >
            <ChevronRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StoreGallery;