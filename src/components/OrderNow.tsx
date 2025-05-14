import React from 'react';
import { whatsappUrl } from '../constants/content';

const OrderNow: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-red-700 to-red-500 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute h-40 w-40 rounded-full bg-white top-10 left-10"></div>
        <div className="absolute h-20 w-20 rounded-full bg-white bottom-10 right-20"></div>
        <div className="absolute h-32 w-32 rounded-full bg-white top-1/2 left-1/3"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Spice Up Your Meals?</h2>
          <p className="text-xl text-red-100 mb-8">
            Ordering is quick and easy! Just click the button below to connect with us on WhatsApp and place your order today.
          </p>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold text-xl transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Order via WhatsApp
          </a>
          <p className="mt-6 text-red-100">
            Same-day delivery available for orders placed before 12:00 PM (subject to location)
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrderNow;