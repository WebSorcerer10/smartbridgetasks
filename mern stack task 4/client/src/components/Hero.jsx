import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gray-900 h-[600px] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          alt="Hero background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Discover Amazing Products
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          Find the perfect items for your lifestyle with our curated collection
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero; 