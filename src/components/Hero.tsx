import React from 'react';
import { tagline, whatsappUrl } from '../constants/content';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-r from-red-800 to-red-500 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6937434/pexels-photo-6937434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left pl-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
              {tagline}
            </h1>
            <p className="text-xl text-red-100 mb-8 max-w-lg mx-auto md:mx-0">
              Authentic, homemade sambal that brings the perfect spicy kick to elevate any dish. Made with love, delivered to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold text-lg transition duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Order via WhatsApp
              </a>
              <button 
                onClick={() => {
                  const productsSection = document.getElementById('products');
                  if (productsSection) {
                    productsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-red-600 transition duration-300 flex items-center justify-center"
              >
                View Products
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-start ml-[400px]">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition duration-500">
              <img 
                src="/Sambal-Gepuk-Landing-Page/two-jars.jpg" 
                alt="Delicious Sambal" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
