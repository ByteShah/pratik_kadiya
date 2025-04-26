import React, { useState } from 'react';
import { ExternalLink, Play, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface Reel {
  id: number;
  thumbnail: string;
  title: string;
  category: string;
  views: string;
  likes: string;
  link: string;
}

const Reels: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Content' },
    { id: 'family', name: 'Family Comedy' },
    { id: 'culture', name: 'Gujarati Culture' },
    { id: 'trending', name: 'Trending' },
    { id: 'sketches', name: 'Comedy Sketches' },
  ];
  
  const reelsData: Reel[] = [
    {
      id: 1,
      thumbnail: 'https://images.pexels.com/photos/8951999/pexels-photo-8951999.jpeg',
      title: 'Me as a Teacher 😂',
      category: 'trending',
      views: '1.6M',
      likes: '138K',
      link: 'https://www.instagram.com/reel/DIggZX4ou0d/?utm_source=ig_web_copy_link',
    },
    {
      id: 2,
      thumbnail: 'https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg',
      title: 'Gujarati Mom vs Online Shopping',
      category: 'family',
      views: '300K',
      likes: '35K',
      link: 'https://www.instagram.com/pratik_15_9/',
    },
    {
      id: 3,
      thumbnail: 'https://images.pexels.com/photos/8952050/pexels-photo-8952050.jpeg',
      title: 'Types of People at Garba',
      category: 'culture',
      views: '450K',
      likes: '42K',
      link: 'https://www.instagram.com/pratik_15_9/',
    },
    {
      id: 4,
      thumbnail: 'https://images.pexels.com/photos/8951979/pexels-photo-8951979.jpeg',
      title: 'School Life Memories 🏫',
      category: 'sketches',
      views: '600K',
      likes: '55K',
      link: 'https://www.instagram.com/pratik_15_9/',
    },
    {
      id: 5,
      thumbnail: 'https://images.pexels.com/photos/7433831/pexels-photo-7433831.jpeg',
      title: 'Trending Gujarati Meme Recreation',
      category: 'trending',
      views: '250K',
      likes: '28K',
      link: 'https://www.instagram.com/pratik_15_9/',
    },
    {
      id: 6,
      thumbnail: 'https://images.pexels.com/photos/8952143/pexels-photo-8952143.jpeg',
      title: 'Every Friend Group Has These People',
      category: 'sketches',
      views: '350K',
      likes: '38K',
      link: 'https://www.instagram.com/pratik_15_9/',
    },
  ];
  
  const filteredReels = activeFilter === 'all' 
    ? reelsData 
    : reelsData.filter(reel => reel.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="reels" className="py-20 bg-neutral-100 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--primary)]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h6 className="text-[var(--primary)] font-semibold tracking-wider mb-2">MY CONTENT</h6>
          <h2 className="section-title mx-auto">Viral Comedy Reels</h2>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto mt-4 rounded-full"></div>
          <p className="text-neutral-600 max-w-2xl mx-auto mt-6">
            Check out my most popular comedy reels that have made Gujarat laugh! From family humor to cultural comedy, there's something for everyone.
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-[var(--primary)] text-white shadow-lg'
                  : 'bg-white text-neutral-700 hover:bg-neutral-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredReels.map((reel) => (
            <motion.div 
              key={reel.id} 
              className="group card"
              variants={itemVariants}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={reel.thumbnail} 
                  alt={reel.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href={reel.link}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="w-16 h-16 rounded-full bg-[var(--primary)] flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300"
                  >
                    <Play size={24} className="text-white ml-1" />
                  </a>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                  {reel.views} views
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-[var(--primary)] font-medium mb-2 uppercase">
                  {reel.category}
                </div>
                <h3 className="text-xl font-bold mb-4">{reel.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-neutral-600">
                      <ThumbsUp size={16} className="mr-1" />
                      <span>{reel.likes}</span>
                    </div>
                    <div className="flex items-center text-neutral-600">
                      <MessageCircle size={16} className="mr-1" />
                      <span>Comments</span>
                    </div>
                  </div>
                  <motion.a 
                    href={reel.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--primary)] hover:text-[var(--primary-dark)]"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Share2 size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <motion.a 
            href="https://www.instagram.com/pratik_15_9/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Follow Me on Instagram
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Reels;