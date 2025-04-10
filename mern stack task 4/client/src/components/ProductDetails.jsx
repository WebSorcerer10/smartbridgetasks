import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();

  // Product database
  const products = {
    1: {
      name: "Wireless Headphones",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      description: "High-quality wireless headphones with noise cancellation",
      features: [
        "Active Noise Cancellation",
        "40-hour battery life",
        "Premium sound quality",
        "Comfortable fit"
      ]
    },
    2: {
      name: "Smart Watch",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      description: "Feature-rich smartwatch with health tracking",
      features: [
        "Heart rate monitoring",
        "Sleep tracking",
        "Water resistant",
        "1.4-inch AMOLED display"
      ]
    },
    3: {
      name: "Premium Laptop",
      price: 1299.99,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
      description: "Powerful laptop for work and entertainment",
      features: [
        "Intel Core i7 processor",
        "16GB RAM",
        "512GB SSD",
        "15.6-inch 4K display"
      ]
    },
    4: {
      name: "Smartphone",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      description: "Latest smartphone with advanced camera features",
      features: [
        "48MP Triple Camera",
        "5G Connectivity",
        "6.7-inch OLED display",
        "All-day battery life"
      ]
    },
    5: {
      name: "Wireless Earbuds",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb",
      description: "Compact and powerful wireless earbuds",
      features: [
        "Active noise cancellation",
        "Touch controls",
        "24-hour battery life",
        "Water resistant"
      ]
    },
    6: {
      name: "Gaming Console",
      price: 499.99,
      image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128",
      description: "Next-gen gaming console for immersive gameplay",
      features: [
        "4K gaming",
        "1TB storage",
        "Ray tracing support",
        "Backward compatibility"
      ]
    }
  };

  const product = products[id] || products[1]; // Fallback to first product if ID not found

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-2xl text-rose-600 mb-6">${product.price}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Features:</h3>
              <ul className="list-disc pl-5 space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>
            </div>
            <button className="bg-rose-500 text-white py-3 px-8 rounded-lg hover:bg-rose-600 transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails; 