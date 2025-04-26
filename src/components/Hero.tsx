import React from 'react';
import { ArrowDown, ArrowRight, Laugh, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1600")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h5 className="text-[var(--accent)] font-medium mb-4 tracking-wider">GUJARATI CONTENT CREATOR & COMEDIAN</h5>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Making <span className="text-[var(--primary)]">Gujarat</span> Laugh One Reel at a Time
          </motion.h1>
          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-xl">
            Hey, I'm Pratik Kadiya! I create funny and relatable content that brings smiles to faces across Gujarat and beyond. Join me on this journey of laughter and entertainment!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a 
              href="#contact" 
              className="btn btn-primary group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Connect With Me
              <ArrowRight className="inline-block ml-2 transition-transform group-hover:translate-x-1" size={20} />
            </motion.a>
            <motion.a 
              href="#reels" 
              className="btn btn-outline text-white border-white hover:bg-white hover:text-[var(--primary-dark)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Watch My Reels
            </motion.a>
          </div>
          
          <div className="flex flex-wrap justify-center sm:justify-start gap-6 mt-12">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center justify-center mb-2">
                <Laugh className="w-6 h-6 text-[var(--accent)] mr-2" />
                <p className="text-3xl md:text-4xl font-bold text-white">100K+</p>
              </div>
              <p className="text-white/70">Daily Laughs</p>
            </motion.div>
            <div className="hidden sm:block h-12 w-px bg-white/20"></div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-[var(--primary)] mr-2" />
                <p className="text-3xl md:text-4xl font-bold text-white">5M+</p>
              </div>
              <p className="text-white/70">Views</p>
            </motion.div>
            <div className="hidden sm:block h-12 w-px bg-white/20"></div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-[var(--secondary)] mr-2" />
                <p className="text-3xl md:text-4xl font-bold text-white">15K+</p>
              </div>
              <p className="text-white/70">Followers</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <a href="#about" className="text-white">
          <ArrowDown size={28} />
        </a>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-[var(--primary)]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-[var(--accent)]/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;