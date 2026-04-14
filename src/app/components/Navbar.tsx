import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('hero')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#dcfd68] to-[#a8c952] rounded-lg flex items-center justify-center shadow-lg shadow-[#dcfd68]/30">
              <span className="text-black">X</span>
            </div>
            <span className="text-2xl text-white">Xensphere</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-300 hover:text-[#dcfd68] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-[#dcfd68] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-gray-300 hover:text-[#dcfd68] transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-[#dcfd68] transition-colors"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-6 py-2 bg-[#dcfd68] text-black rounded-full hover:bg-white transition-all hover:scale-105 shadow-lg shadow-[#dcfd68]/30">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 py-4 border-t border-white/10"
          >
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-300 hover:text-[#dcfd68] transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-[#dcfd68] transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-gray-300 hover:text-[#dcfd68] transition-colors text-left"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-[#dcfd68] transition-colors text-left"
              >
                Contact
              </button>
              <button className="px-6 py-2 bg-[#dcfd68] text-black rounded-full hover:bg-white transition-all w-full">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
