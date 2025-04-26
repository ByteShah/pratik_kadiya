import React from 'react';
import { Instagram, Youtube, Twitter, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-[var(--primary)]">PRATIK</span> KADIYA
            </h3>
            <p className="text-neutral-400 mb-6">
              Connecting with audiences through authentic comedy and creative content that makes Gujarat laugh!
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/pratik_15_9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
              >
                <Youtube size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#home" 
                  className="text-neutral-400 hover:text-[var(--primary)] transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-neutral-400 hover:text-[var(--primary)] transition-colors duration-300"
                >
                  About Me
                </a>
              </li>
              <li>
                <a 
                  href="#reels" 
                  className="text-neutral-400 hover:text-[var(--primary)] transition-colors duration-300"
                >
                  My Work
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-neutral-400 hover:text-[var(--primary)] transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  className="text-neutral-400 hover:text-[var(--primary)] transition-colors duration-300"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-neutral-400 hover:text-[var(--primary)] transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#services" 
                  className="text-neutral-400 hover:text-[var(--primary)] transition-colors duration-300"
                >
                  Comedy Content
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-neutral-400 hover:text-[var(--primary)] transition-colors duration-300"
                >
                  Brand Partnerships
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-neutral-400 hover:text-[var(--primary)] transition-colors duration-300"
                >
                  Influencer Marketing
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-neutral-400 hover:text-[var(--primary)] transition-colors duration-300"
                >
                  Event Hosting
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-neutral-400 hover:text-[var(--primary)] transition-colors duration-300"
                >
                  Campaign Management
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-neutral-400 mb-4">
              Subscribe to get updates on my latest comedy content and collaborations!
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-3 bg-neutral-800 border border-neutral-700 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] w-full"
              />
              <button 
                className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] px-4 rounded-r-md transition-colors duration-300"
              >
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Pratik Kadiya. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;