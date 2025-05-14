import React from 'react';
import { products } from '../constants/content';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Signature Sambals</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Handcrafted with authentic recipes, our sambals bring the perfect balance of heat and flavor to your table.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:shadow-xl hover:-translate-y-2"
            >
              <div className="aspect-w-7 aspect-h-5 overflow-hidden max-w-md mx-auto">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                    <p className="text-white/90 mb-4 max-w-md">{product.description}</p>
                  </div>
                  <div className="bg-red-600 py-2 px-4 rounded-full font-bold text-lg">
                    {product.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;