import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../mock/mockData';

const CategoriesSection = () => {
  return (
    <section className="max-w-[1600px] mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Categories to Bag</h2>
        <p className="text-gray-600 max-w-4xl mx-auto">
          We have what you are looking for!! Offering the largest tile collection in all the categories, colours, textures, finish and sizes.
          Tons of designs and styles sourced across globe to give your wall and floor a modern touch. We just don't sell tiles, we sell experience.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={category.link}
            className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
              <h3 className="text-white text-sm font-semibold p-3 w-full text-center">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;