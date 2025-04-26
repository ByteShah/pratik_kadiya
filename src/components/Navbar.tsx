import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Reels', href: '#reels' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, href: 'https://instagram.com/pratik_15_9', color: 'hover:text-pink-600' },
    { icon: <Youtube size={20} />, href: 'https://youtube.com', color: 'hover:text-red-600' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com', color: 'hover:text-blue-400' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com', color: 'hover:text-blue-700' },
  ];

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const linkVariants = {
    closed: { x: 50, opacity: 0 },
    open: i => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1
      }
    })
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            className="text-2xl font-bold text-[var(--primary)] transition-all duration-300"
          >
            <span className="font-black">PRATIK</span> KADIYA
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="nav-link"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`text-neutral-600 transition-colors duration-300 ${link.color}`}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-neutral-800 transition-colors duration-300 hover:text-[var(--primary)]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-white/95 backdrop-blur-lg z-40 md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="flex flex-col h-full p-8">
              <div className="flex justify-end mb-8">
                <button 
                  onClick={toggleMenu} 
                  className="text-neutral-800 transition-colors duration-300 hover:text-[var(--primary)]"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex flex-col space-y-6">
                {navLinks.map((link, i) => (
                  <motion.a 
                    key={link.name} 
                    href={link.href} 
                    className="text-2xl font-medium text-neutral-800 transition-colors duration-300 hover:text-[var(--primary)]"
                    onClick={toggleMenu}
                    custom={i}
                    variants={linkVariants}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
              
              <div className="mt-auto">
                <div className="flex items-center justify-center space-x-6 mt-8">
                  {socialLinks.map((link, index) => (
                    <motion.a 
                      key={index} 
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`text-neutral-600 transition-colors duration-300 ${link.color}`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.2 }}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;