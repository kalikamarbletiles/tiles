import React from 'react';
import { Link } from 'react-router-dom';
import { galleryImages } from '../mock/mockData';
import { Button } from './ui/button';

const GallerySection = () => {
  return (
    <section className="max-w-[1600px] mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Browse Our Gallery</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-6">
          Every space has a story!! Get inspired from thousands of Designs with space that are directly taken from our customer's site.
          Surely you will find a perfect match for your tiling need with our extensive range of room image gallery.
        </p>
        <Button asChild className="bg-[#FF8C00] hover:bg-[#FF7700] text-white">
          <Link to="/inspiration-gallery">Explore Gallery</Link>
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-[4/3]"
          >
            <img
              src={image.image}
              alt={image.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
              <h3 className="text-white font-semibold p-4">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">The Bathroom Design Style Guide</h3>
      </div>
    </section>
  );
};

export default GallerySection;