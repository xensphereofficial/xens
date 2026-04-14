import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { BrandLogo } from './BrandLogo';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const sections = ['hero', 'about', 'products', 'why-choose', 'contact'];

  useEffect(() => {
    const onScroll = () => {
      const middleOfScreen = window.scrollY + window.innerHeight * 0.35;
      let current = 'hero';

      for (const id of sections) {
        const section = document.getElementById(id);
        if (!section) continue;
        if (middleOfScreen >= section.offsetTop) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('hero')}
          >
            <BrandLogo />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className={`transition-colors ${activeSection === 'hero' ? 'text-[#dcfd68]' : 'text-gray-300 hover:text-[#dcfd68]'}`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`transition-colors ${activeSection === 'about' ? 'text-[#dcfd68]' : 'text-gray-300 hover:text-[#dcfd68]'}`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className={`transition-colors ${activeSection === 'products' ? 'text-[#dcfd68]' : 'text-gray-300 hover:text-[#dcfd68]'}`}
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('why-choose')}
              className={`transition-colors ${activeSection === 'why-choose' ? 'text-[#dcfd68]' : 'text-gray-300 hover:text-[#dcfd68]'}`}
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`transition-colors ${activeSection === 'contact' ? 'text-[#dcfd68]' : 'text-gray-300 hover:text-[#dcfd68]'}`}
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('get-started')}
              className="px-6 py-2 bg-[#dcfd68] text-black rounded-full hover:bg-white transition-all hover:scale-105 shadow-lg shadow-[#dcfd68]/30"
            >
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
                className={`transition-colors text-left ${activeSection === 'hero' ? 'text-[#dcfd68]' : 'text-gray-300 hover:text-[#dcfd68]'}`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`transition-colors text-left ${activeSection === 'about' ? 'text-[#dcfd68]' : 'text-gray-300 hover:text-[#dcfd68]'}`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className={`transition-colors text-left ${activeSection === 'products' ? 'text-[#dcfd68]' : 'text-gray-300 hover:text-[#dcfd68]'}`}
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('why-choose')}
                className={`transition-colors text-left ${activeSection === 'why-choose' ? 'text-[#dcfd68]' : 'text-gray-300 hover:text-[#dcfd68]'}`}
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`transition-colors text-left ${activeSection === 'contact' ? 'text-[#dcfd68]' : 'text-gray-300 hover:text-[#dcfd68]'}`}
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('get-started')}
                className="px-6 py-2 bg-[#dcfd68] text-black rounded-full hover:bg-white transition-all w-full"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
