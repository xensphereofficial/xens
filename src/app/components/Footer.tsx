import { motion } from 'motion/react';
import { Twitter, Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#dcfd68]/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <BrandLogo />
            </motion.div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Empowering creators to build, launch, and scale their digital product 
              businesses in the modern economy.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { icon: <Twitter size={20} />, label: 'Twitter' },
                { icon: <Facebook size={20} />, label: 'Facebook' },
                { icon: <Instagram size={20} />, label: 'Instagram' },
                { icon: <Linkedin size={20} />, label: 'LinkedIn' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white/5 hover:bg-[#dcfd68]/20 border border-white/10 hover:border-[#dcfd68]/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#dcfd68] transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'About', id: 'about' },
                { label: 'Products', id: 'products' },
                { label: 'Process', id: 'how-it-works' },
                { label: 'Why Us', id: 'why-choose' },
                { label: 'Get Started', id: 'get-started' },
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-[#dcfd68] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@xensphere.com"
                  className="text-gray-400 hover:text-[#dcfd68] transition-colors flex items-center gap-2"
                >
                  <Mail size={16} />
                  hello@xensphere.com
                </a>
              </li>
              <li>
                <a href="tel:+923393009400" className="text-gray-400 hover:text-[#dcfd68] transition-colors">
                  +92 339 3009400
                </a>
              </li>
              <li className="text-gray-400">Hamdard Chowk, Lahore</li>
              <li className="text-gray-400">Support available 24/7</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Xensphere. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#dcfd68] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#dcfd68] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#dcfd68] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#dcfd68] to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
    </footer>
  );
}
