import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-cyan-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Store</h3>
            <p className="text-gray-400">Your one-stop shop for amazing products</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">Home</a></li>
              <li><a href="/products" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">Products</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">About</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors duration-300">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 