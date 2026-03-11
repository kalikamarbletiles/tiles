import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, Box } from 'lucide-react';
import { products } from '../mock/mockData';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import RoomVisualization3D from './RoomVisualization3D';

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [is3DViewOpen, setIs3DViewOpen] = useState(false);

  const handleView3D = (product) => {
    setSelectedProduct(product);
    setIs3DViewOpen(true);
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">New Arrivals</h2>
          <p className="text-gray-600 max-w-3xl">
            Hey!! Yaa, go ahead on your next project with the new collections and designs that MYTYLES has to offer.
            Keeping your project in mind, we have curated an extensive range of new trending wall & floor tiles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.isNew && (
                  <Badge className="absolute top-3 left-3 bg-[#FF8C00] hover:bg-[#FF8C00]">
                    NEW
                  </Badge>
                )}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all"
                    title="Quick View"
                  >
                    <Eye size={16} className="text-gray-700" />
                  </button>
                  <button 
                    onClick={() => handleView3D(product)}
                    className="w-8 h-8 bg-[#FF8C00] rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all"
                    title="3D Room View"
                  >
                    <Box size={16} className="text-white" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-1">{product.size} | {product.type}</p>
                <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 h-10">
                  {product.name}
                </h3>
                <p className="text-[#FF8C00] font-bold text-sm">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-[#FF8C00] hover:bg-[#FF7700] text-white px-8 py-6 text-lg">
            View All Products
          </Button>
        </div>
      </div>

      {/* 3D Visualization Modal */}
      <RoomVisualization3D
        open={is3DViewOpen}
        onClose={() => setIs3DViewOpen(false)}
        product={selectedProduct}
      />
    </section>
  );
};

export default ProductsSection;