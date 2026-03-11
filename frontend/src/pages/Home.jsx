import React from 'react';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import Footer from '../components/Footer';
import CategoriesSection from '../components/CategoriesSection';
import ReelsSection from '../components/ReelsSection';
import TrendingChoices from '../components/TrendingChoices';
import ProductsSection from '../components/ProductsSection';
import GallerySection from '../components/GallerySection';
import ColorCategories from '../components/ColorCategories';
import AccessoriesSection from '../components/AccessoriesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogsSection from '../components/BlogsSection';
import StoreGallery from '../components/StoreGallery';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroCarousel />
      
      {/* Main Heading */}
      <section className="max-w-[1600px] mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-[#FF8C00]">Buy Tiles Online:</span>{' '}
          <span className="text-gray-900">Transform Your Space with Style</span>
        </h2>
      </section>

      <CategoriesSection />
      <ReelsSection />
      <TrendingChoices />
      <ProductsSection />
      <GallerySection />
      <ColorCategories />
      <AccessoriesSection />
      <TestimonialsSection />
      <BlogsSection />
      <StoreGallery />
      
      <Footer />
    </div>
  );
};

export default Home;