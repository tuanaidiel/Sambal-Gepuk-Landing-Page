import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { businessName, whatsappUrl } from '../constants/content';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  }`;

  const linkClasses = `text-sm font-medium ${
    isScrolled ? 'text-gray-800 hover:text-red-600' : 'text-white hover:text-red-200'
  } transition duration-300`;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a 
            href="#" 
            className={`text-xl font-bold ${isScrolled ? 'text-red-600' : 'text-white'} transition duration-300`}
          >
            {businessName}
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('products')} className={linkClasses}>
            Products
          </button>
          <button onClick={() => scrollToSection('features')} className={linkClasses}>
            Why Us
          </button>
          <button onClick={() => scrollToSection('testimonials')} className={linkClasses}>
            Testimonials
          </button>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium transition duration-300 flex items-center"
          >
            Order Now
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className={`p-2 rounded-md ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-2 px-4 transition-all duration-300">
          <div className="flex flex-col space-y-3">
            <button 
              onClick={() => scrollToSection('products')} 
              className="py-2 text-gray-800 hover:text-red-600 font-medium"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('features')} 
              className="py-2 text-gray-800 hover:text-red-600 font-medium"
            >
              Why Us
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="py-2 text-gray-800 hover:text-red-600 font-medium"
            >
              Testimonials
            </button>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium text-center"
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;