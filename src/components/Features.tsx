import React from 'react';
import { 
  ChefHat, 
  Leaf, 
  Flame 
} from 'lucide-react';
import { features } from '../constants/content';

const Features: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ChefHat':
        return <ChefHat size={32} className="text-red-600" />;
      case 'Leaf':
        return <Leaf size={32} className="text-green-500" />;
      case 'Flame':
        return <Flame size={32} className="text-orange-500" />;
      default:
        return null;
    }
  };

  return (
    <section id="features" className="py-20 bg-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We take pride in our traditional methods and premium ingredients to create the most delicious sambal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="mb-4 inline-block p-3 bg-red-100 rounded-full">
                {getIcon(feature.icon)}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;