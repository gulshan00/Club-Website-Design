// components/Navbar.jsx
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-3xl font-bold tracking-wider">
            <span className="text-blue-400">DHRUVA</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-blue-400 transition-colors">HOME</a>
            <a href="#" className="hover:text-blue-400 transition-colors">EVENTS</a>
            <a href="#" className="hover:text-blue-400 transition-colors">PODCAST</a>
            <a href="#" className="hover:text-blue-400 transition-colors">ABOUT</a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="hover:text-blue-400 transition-colors py-2">HOME</a>
              <a href="#" className="hover:text-blue-400 transition-colors py-2">EVENTS</a>
              <a href="#" className="hover:text-blue-400 transition-colors py-2">PODCAST</a>
              <a href="#" className="hover:text-blue-400 transition-colors py-2">ABOUT</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;