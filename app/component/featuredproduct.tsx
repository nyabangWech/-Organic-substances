'use client';

import React from 'react';

const FeaturedProducts = () => {
  const products = [
    {
      name: 'French toast',
      originalPrice: 76.00,
      salePrice: 70.00,
      image: '/image/frenchtoast.jpg' // Replace with your image path
    },
    {
      name: 'Bunny chow',
      originalPrice: 58.00,
      salePrice: 55.00,
      image: '/image/Bunny Chow (1).jpeg'
    },
    {
      name: 'Butter garlic crab',
      originalPrice: 90.00,
      salePrice: 80.00,
      image: '/image/buttergarlic grab.jpg'
    },
    {
      name: 'Fish  chips',
      originalPrice: 87.00,
      salePrice: 77.00,
      image: '/image/fishchips.jpg'
    },
    {
      name: 'Chili crab',
      originalPrice: 30.00,
      salePrice: 28.00,
      image: '/image/chillicrab.jpg'
    },
    {
      name: 'Chicken parm',
      originalPrice: 65.00,
      salePrice: 55.00,
      image: '/image/chicken parm.jpg'
    },
    {
      name: 'Stinky tofu',
      originalPrice: 36.00,
      salePrice: 32.00,
      image: '/image/stinkytofu.jpg'
    },
    {
      name: 'Buttered toast',
      originalPrice: 18.00,
      salePrice: 16.00,
      image: '/image/butter toast.jpg'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Featured Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group"
          >
            {/* Product Image Container */}
            <div className="aspect-square relative p-6 bg-gray-50">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Info */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-medium mb-2 hover:text-lime-500 transition-colors cursor-pointer">
                {product.name}
              </h3>
              
              <div className="flex justify-center items-center gap-2">
                <span className="text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span className="text-lime-500 font-bold">
                  ${product.salePrice.toFixed(2)}
                </span>
              </div>

              {/* Hover Overlay */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-full bg-lime-500 text-white py-2 px-4 rounded hover:bg-lime-600 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;