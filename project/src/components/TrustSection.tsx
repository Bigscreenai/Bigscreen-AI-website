import React from 'react';
import { motion } from 'framer-motion';

const TrustSection: React.FC = () => {
  // Mock client logos
  const clients = [
    { name: 'TechCorp', logo: 'T' },
    { name: 'InnovateLabs', logo: 'IL' },
    { name: 'FutureVision', logo: 'FV' },
    { name: 'NextGen Systems', logo: 'NG' },
    { name: 'DataSmart', logo: 'DS' },
  ];

  // Mock testimonials
  const testimonials = [
    {
      quote: "Bolt transformed our customer service with AI automation, reducing response times by 78%.",
      author: "Sarah Chen",
      role: "CTO, TechCorp"
    },
    {
      quote: "Their AI solutions helped us scale operations without adding headcount. Game changer.",
      author: "Marcus Johnson",
      role: "Operations Director, InnovateLabs"
    },
    {
      quote: "From concept to deployment in weeks. The ROI has been incredible.",
      author: "Elena Rodriguez",
      role: "CEO, FutureVision"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Future-Focused Businesses
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto"></div>
        </motion.div>

        {/* Client logos */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-16"
        >
          {clients.map((client, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-24 h-16 bg-gray-100 rounded-md">
                <span className="text-lg font-bold text-gray-500">{client.logo}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-8 shadow-sm border border-gray-100"
            >
              <svg 
                className="w-10 h-10 text-blue-200 mb-4" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;