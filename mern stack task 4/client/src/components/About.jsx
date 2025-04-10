import React from 'react';

const About = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
          
          <div className="space-y-6 text-gray-600">
            <p>
              Welcome to our premier electronics store, where innovation meets excellence. 
              Established in 2024, we've been at the forefront of bringing cutting-edge 
              technology to our valued customers.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
              <p>
                To provide high-quality electronic products and exceptional customer service, 
                making technology accessible to everyone while maintaining the highest standards 
                of product quality and customer satisfaction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Why Choose Us?</h3>
                <ul className="list-disc list-inside space-y-2 text-blue-800">
                  <li>Premium Quality Products</li>
                  <li>Expert Customer Support</li>
                  <li>Fast & Secure Shipping</li>
                  <li>30-Day Money Back Guarantee</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">Our Values</h3>
                <ul className="list-disc list-inside space-y-2 text-green-800">
                  <li>Customer Satisfaction</li>
                  <li>Innovation</li>
                  <li>Integrity</li>
                  <li>Excellence</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
              <p>
                Starting as a small electronics shop, we've grown into a trusted destination 
                for technology enthusiasts and everyday consumers alike. Our commitment to 
                providing the latest and greatest in electronic innovations has earned us 
                a reputation for excellence in the industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 