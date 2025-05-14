import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../constants/content';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        size={20} 
        className={`${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our happy customers have to say about our sambal.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Desktop testimonials */}
            <div className="hidden md:grid grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="bg-red-50 p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                      <div className="flex">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                </div>
              ))}
            </div>

            {/* Mobile testimonial carousel */}
            <div className="md:hidden">
              <div 
                className="bg-red-50 p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{testimonials[currentIndex].name}</h4>
                    <div className="flex">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonials[currentIndex].comment}"</p>
                
                <div className="flex justify-between mt-6">
                  <button 
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-white shadow hover:bg-red-100 transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <div 
                        key={index} 
                        className={`w-2 h-2 rounded-full ${
                          index === currentIndex ? 'bg-red-600' : 'bg-gray-300'
                        }`}
                      ></div>
                    ))}
                  </div>
                  <button 
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-white shadow hover:bg-red-100 transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;