
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-cream/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <span className="font-playfair text-wood-primary text-xl font-bold">Thomas Wright</span>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoal hover:text-wood-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#home" className="text-charcoal hover:text-wood-primary transition-colors">Home</a>
            <a href="#contact" className="text-charcoal hover:text-wood-primary transition-colors">Contact</a>
            <a href="#estimate" className="text-charcoal hover:text-wood-primary transition-colors">Get Estimate</a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-cream">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-charcoal hover:text-wood-primary transition-colors">Home</a>
            <a href="#contact" className="block px-3 py-2 text-charcoal hover:text-wood-primary transition-colors">Contact</a>
            <a href="#estimate" className="block px-3 py-2 text-charcoal hover:text-wood-primary transition-colors">Get Estimate</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
