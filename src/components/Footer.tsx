import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { businessName, socialMedia, whatsappNumber } from '../constants/content';

const Footer: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Facebook':
        return <Facebook size={20} />;
      case 'Instagram':
        return <Instagram size={20} />;
      case 'Twitter':
        return <Twitter size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-500">{businessName}</h3>
            <p className="text-gray-300 mb-4">
              Bringing authentic, homemade sambals to your doorstep. Made with love and the finest ingredients.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialMedia.map((platform) => (
                <a 
                  key={platform.id} 
                  href={platform.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-red-600 transition duration-300"
                >
                  {getIcon(platform.icon)}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-2">Phone: +{whatsappNumber}</p>
            <p className="text-gray-300 mb-2">Email: info@sambalhomemade.com</p>
            <p className="text-gray-300">Address: Kuala Lumpur, Malaysia</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <p className="text-gray-300 mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-300 mb-2">Saturday: 10:00 AM - 4:00 PM</p>
            <p className="text-gray-300">Sunday: Closed</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {businessName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;