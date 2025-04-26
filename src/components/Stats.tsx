import React, { useState, useEffect, useRef } from 'react';
import { Instagram, Youtube, TrendingUp, Award } from 'lucide-react';
import { motion } from 'framer-motion';

interface Stat {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const stats: Stat[] = [
    {
      icon: <Instagram className="w-8 h-8" />,
      value: 15,
      suffix: 'K+',
      label: 'Instagram Followers',
      color: 'bg-gradient-to-r from-purple-600 to-pink-600',
    },
    {
      icon: <Youtube className="w-8 h-8" />,
      value: 5,
      suffix: 'K+',
      label: 'YouTube Subscribers',
      color: 'bg-gradient-to-r from-red-600 to-red-700',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: 2,
      suffix: 'M+',
      label: 'Content Views',
      color: 'bg-gradient-to-r from-blue-600 to-blue-800',
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: 20,
      suffix: '+',
      label: 'Brand Collaborations',
      color: 'bg-gradient-to-r from-green-600 to-green-800',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const intervals = stats.map((stat, index) => {
        return setInterval(() => {
          setCounts(prevCounts => {
            const newCounts = [...prevCounts];
            if (newCounts[index] < stat.value) {
              newCounts[index] = Math.min(
                newCounts[index] + Math.ceil(stat.value / 20),
                stat.value
              );
            }
            return newCounts;
          });
        }, 100);
      });

      return () => {
        intervals.forEach(interval => clearInterval(interval));
      };
    }
  }, [isVisible, stats]);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-neutral-900 text-white relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 to-neutral-900/90"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h6 className="text-[var(--primary)] font-semibold tracking-wider mb-2">MY IMPACT</h6>
          <h2 className="section-title mx-auto text-white">Growing Together</h2>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto mt-4 rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className={`rounded-xl p-6 text-center glass ${stat.color}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">
                {counts[index]}{stat.suffix}
              </div>
              <p className="text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;