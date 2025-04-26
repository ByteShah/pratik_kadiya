import React from 'react';
import { Laugh, TrendingUp, Users, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const highlights = [
    {
      icon: <Laugh className="w-6 h-6 text-[var(--primary)]" />,
      title: 'Comedy King',
      description: 'Creating viral comedy content that resonates with Gujarati audiences',
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[var(--primary)]" />,
      title: 'Trending Creator',
      description: 'Consistently trending on Instagram and YouTube Shorts',
    },
    {
      icon: <Users className="w-6 h-6 text-[var(--primary)]" />,
      title: 'Growing Community',
      description: 'Building a strong community of Gujarati entertainment lovers',
    },
    {
      icon: <Heart className="w-6 h-6 text-[var(--primary)]" />,
      title: 'Authentic Content',
      description: 'Real, relatable, and rooted in Gujarati culture',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--primary-light)]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h6 className="text-[var(--primary)] font-semibold tracking-wider mb-2">ABOUT ME</h6>
          <h2 className="section-title mx-auto">The Story Behind The Laughs</h2>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" ref={ref}>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Pratik Kadiya" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[var(--accent)] rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[var(--primary-light)] rounded-lg -z-10"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="text-3xl font-bold mb-6">Hey, I'm Pratik Kadiya!</h3>
            <p className="text-neutral-700 mb-6">
              A proud Gujarati content creator from the vibrant state of Gujarat! My journey in content creation started with a simple goal - to make people laugh and spread joy through relatable Gujarati humor.
            </p>
            <p className="text-neutral-700 mb-8">
              From funny skits about Gujarati families to relatable content about our unique culture, I create videos that celebrate our identity while bringing smiles to faces. My content is a blend of humor, authenticity, and the beautiful essence of Gujarat.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  variants={itemVariants}
                >
                  <div className="mt-1 mr-4 bg-[var(--primary-light)]/20 p-2 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-sm text-neutral-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;