import React from 'react';
import { Video, Camera, Presentation, Megaphone, BarChart, Users } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  primaryColor: string;
  secondaryColor: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Video className="h-8 w-8 text-white" />,
      title: 'Content Creation',
      description: 'High-quality, engaging video content for your brand that resonates with the Indian audience.',
      primaryColor: 'var(--primary)',
      secondaryColor: 'var(--primary-dark)',
    },
    {
      icon: <Camera className="h-8 w-8 text-white" />,
      title: 'Photography',
      description: 'Professional product and lifestyle photography that showcases your brand in the best light.',
      primaryColor: 'var(--secondary)',
      secondaryColor: 'var(--secondary-dark)',
    },
    {
      icon: <Presentation className="h-8 w-8 text-white" />,
      title: 'Brand Partnerships',
      description: 'Strategic collaborations that authentically integrate your brand into my content.',
      primaryColor: 'var(--accent)',
      secondaryColor: 'var(--accent-dark)',
    },
    {
      icon: <Megaphone className="h-8 w-8 text-white" />,
      title: 'Campaign Management',
      description: 'End-to-end campaign planning and execution to maximize your brand\'s impact.',
      primaryColor: 'var(--primary)',
      secondaryColor: 'var(--primary-dark)',
    },
    {
      icon: <BarChart className="h-8 w-8 text-white" />,
      title: 'Analytics & Reporting',
      description: 'Detailed insights and metrics on campaign performance and audience engagement.',
      primaryColor: 'var(--secondary)',
      secondaryColor: 'var(--secondary-dark)',
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: 'Influencer Marketing',
      description: 'Access to my network of influencers to amplify your brand\'s reach.',
      primaryColor: 'var(--accent)',
      secondaryColor: 'var(--accent-dark)',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h6 className="text-[var(--primary)] font-semibold tracking-wider mb-2">MY OFFERINGS</h6>
          <h2 className="section-title mx-auto">Services I Provide</h2>
          <div className="w-24 h-1 bg-[var(--primary)] mx-auto mt-4 rounded-full"></div>
          <p className="text-neutral-600 max-w-2xl mx-auto mt-6">
            I offer a comprehensive range of services to help brands connect with their audience authentically and effectively.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card hover:translate-y-[-10px] group overflow-hidden"
            >
              <div 
                className="p-8"
                style={{
                  background: `linear-gradient(135deg, ${service.primaryColor}, ${service.secondaryColor})`,
                }}
              >
                <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-lg mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/80">{service.description}</p>
              </div>
              <div className="p-6 bg-white flex justify-end">
                <a 
                  href="#contact" 
                  className="text-[var(--primary)] font-medium hover:text-[var(--primary-dark)] transition-colors duration-300"
                >
                  Get Started →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-[var(--primary)] rounded-xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Collaborate?</h3>
              <p className="mb-6 text-white/80">
                Let\'s create something amazing together that connects with your target audience and drives real results for your brand.
              </p>
              <a 
                href="#contact" 
                className="inline-block px-6 py-3 bg-white text-[var(--primary)] font-semibold rounded-md transition-all duration-300 hover:bg-[var(--accent)] hover:text-white"
              >
                Contact Me Today
              </a>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.pexels.com/photos/3962294/pexels-photo-3962294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;