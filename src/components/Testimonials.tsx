import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Ajay Mehta',
      position: 'Marketing Director',
      company: 'FashionBazaar',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      quote: 'Working with Pratik was a game-changer for our brand. Her authentic approach to content creation helped us connect with our target audience in ways we never thought possible. Our engagement metrics increased by 40% within just one month of collaboration.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Neha Sharma',
      position: 'CEO',
      company: 'TravelIndia',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      quote: 'Pratik\'s content not only showcased our travel packages beautifully but also drove real conversions. Her storytelling ability is exceptional, and she has a unique talent for capturing the essence of experiences. We saw a 30% increase in bookings after our campaign.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Vikram Singh',
      position: 'Brand Manager',
      company: 'LuxeBeauty',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      quote: 'The authenticity Pratik brings to her content is unmatched. She took the time to understand our brand values and translated them into content that resonated deeply with her audience. Her professional approach made the entire collaboration smooth and effective.',
      rating: 5,
    },
  ];
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h6 className="text-[var(--primary)] font-semibold tracking-wider mb-2">CLIENT FEEDBACK</h6>
          <h2 className="section-title mx-auto">What Brands Say</h2>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto mt-4 rounded-full"></div>
          <p className="text-neutral-600 max-w-2xl mx-auto mt-6">
            Don\'t just take my word for it. Here\'s what some of the brands I\'ve worked with have to say about our collaborations.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 z-0">
              <div className="text-8xl font-serif text-[var(--primary-light)] opacity-20">"</div>
            </div>
            
            <div className="relative z-10">
              <div className="mb-6 flex justify-center">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[var(--accent)]" fill="#FFC107" />
                ))}
              </div>
              
              <blockquote className="text-center mb-8">
                <p className="text-lg md:text-xl text-neutral-700 italic">
                  "{testimonials[activeIndex].quote}"
                </p>
              </blockquote>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 mb-4 rounded-full overflow-hidden border-4 border-[var(--primary-light)]">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold">{testimonials[activeIndex].name}</h4>
                <p className="text-neutral-600">
                  {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white text-neutral-800 shadow-md flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-colors duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white text-neutral-800 shadow-md flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-colors duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                  index === activeIndex ? 'bg-[var(--primary)] w-6' : 'bg-neutral-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;