
'use client';
import React, { useState } from 'react';

const ProductShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('VEGETABLES');

  const categories = [
    'VEGETABLES',
    'DRIED FOODS',
    'BREAD & CAKE',
    'FISH & MEAT'
  ];

  const products = [
    {
      name: 'Chicken muamba',
      originalPrice: 67.00,
      salePrice: 54.00,
      image: '/image/chicken muamba.jpg',
      category: 'VEGETABLES'
    },
    {
      name: 'Corn on cob',
      originalPrice: 16.00,
      salePrice: 12.00,
      image: '/image/cornon corb.jpg',
      category: 'VEGETABLES'
    },
    {
      name: 'Carrots Group Scal',
      originalPrice: 46.00,
      salePrice: 32.00,
      image: '/image/carrotsscalp.jpg',
      category: 'VEGETABLES'
    },
    {
      name: 'Orange Sliced Mix',
      originalPrice: 20.00,
      salePrice: 18.00,
      image: '/image/orangeslicedmix.jpg',
      category: 'VEGETABLES'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
      
      {/* Main Category */}
      <div className="text-center mb-6">
        <span className="text-lime-500 text-lg font-medium">FOOD & DRINKS</span>
        <div className="w-full h-px bg-lime-500 mt-2" />
      </div>

      {/* Sub Categories */}
      <div className="flex justify-center gap-8 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 text-sm font-medium transition-colors
              ${activeCategory === category 
                ? 'text-lime-500 border-b-2 border-lime-500' 
                : 'text-gray-600 hover:text-lime-500'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div 
            key={index} 
            className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
          >
            <div className="p-4">
              <div className="aspect-square relative mb-4 bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-medium text-center mb-2">{product.name}</h3>
              <div className="flex justify-center items-center gap-2">
                <span className="text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                <span className="text-lime-500 font-bold">${product.salePrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;