import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mt-2">${product.price}</p>
        <Link
          to={`/product/${product.id}`}
          className="mt-4 block text-center bg-rose-500 text-white py-2 px-4 rounded hover:bg-rose-600 transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard; 