import React from 'react';
import { Link } from 'react-router-dom';
import { accessories } from '../mock/mockData';

const AccessoriesSection = () => {
  return (
    <section className="max-w-[1600px] mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Accessories</h2>
        <p className="text-gray-600 max-w-4xl mx-auto">
          You don't have to run around shops to find the right accessories to install your tile and maintain it.
          We have it here for you in single platform. Right adhesives to fix the tile, epoxy grouts for the joint,
          beading and spacers, stone care products are available at competitive prices.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {accessories.map((accessory) => (
          <Link
            key={accessory.id}
            to={accessory.link}
            className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={accessory.image}
                alt={accessory.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
              <div className="p-6 w-full">
                <h3 className="text-white text-xl font-bold mb-1">{accessory.name}</h3>
                <p className="text-gray-300 text-sm">{accessory.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AccessoriesSection;