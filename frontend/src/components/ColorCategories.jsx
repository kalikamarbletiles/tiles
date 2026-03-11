import React from 'react';
import { Link } from 'react-router-dom';
import { colorCategories } from '../mock/mockData';

const ColorCategories = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-[1600px] mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Browse By Colors</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-4">
          {colorCategories.map((category) => (
            <Link
              key={category.id}
              to={`/tiles/color/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group flex flex-col items-center"
            >
              <div className="w-full aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 mb-2">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="text-sm text-gray-700 text-center group-hover:text-[#FF8C00] transition-colors">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ColorCategories;