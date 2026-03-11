import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../mock/mockData';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const TestimonialsSection = () => {
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
    <section className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Testimonials</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            We don't sell tiles, we sell experience. This is what our clients have to say about MYTYLES when asked to review our tile collection and services.
          </p>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="fill-[#FF8C00] text-[#FF8C00]" />
              ))}
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">4.8</p>
              <p className="text-sm text-gray-600">Average Rating</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">15,257+ reviews</p>
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
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="flex-shrink-0 w-[350px] shadow-md hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#FF8C00] text-[#FF8C00]" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{testimonial.text}</p>
                </CardContent>
              </Card>
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

export default TestimonialsSection;