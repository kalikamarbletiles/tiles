import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Eye, Play } from 'lucide-react';
import { reels } from '../mock/mockData';
import { Button } from './ui/button';

const ReelsSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold text-gray-900">Shop by Reels</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              className="rounded-full"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              className="rounded-full"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative flex-shrink-0 w-[180px] h-[320px] rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                src={reel.thumbnail}
                alt={`Reel ${reel.id}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              
              {/* Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={24} className="text-gray-900 ml-1" fill="currentColor" />
                </div>
              </div>

              {/* View Count */}
              <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/60 px-2 py-1 rounded-full">
                <Eye size={14} className="text-white" />
                <span className="text-white text-xs font-medium">{reel.views}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReelsSection;