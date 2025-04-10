import React from 'react';
import ProductCard from './ProductCard';

const productsData = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    description: "High-quality wireless headphones with noise cancellation"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    description: "Feature-rich smartwatch with health tracking"
  },
  {
    id: 3,
    name: "Premium Laptop",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    description: "Powerful laptop for work and entertainment"
  },
  {
    id: 4,
    name: "Smartphone",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    description: "Latest smartphone with advanced camera features"
  },
  {
    id: 5,
    name: "Wireless Earbuds",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb",
    description: "Compact and powerful wireless earbuds"
  },
  {
    id: 6,
    name: "Gaming Console",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128",
    description: "Next-gen gaming console for immersive gameplay"
  }
];

const Products = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products; 