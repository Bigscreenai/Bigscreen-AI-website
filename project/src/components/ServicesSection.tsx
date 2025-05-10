import React from 'react';
import { motion } from 'framer-motion';
import { Workflow, Bot, BarChart as ChartBar, Plug } from 'lucide-react';

const services = [
  {
    title: 'Workflow Automation',
    description: 'Eliminate repetitive tasks and streamline operations with intelligent workflow automation.',
    icon: Workflow
  },
  {
    title: 'Custom AI Bots',
    description: 'Purpose-built AI assistants that handle specific business functions with precision.',
    icon: Bot
  },
  {
    title: 'Data-Driven Decision Systems',
    description: 'Transform raw data into actionable insights with AI-powered analytics.',
    icon: ChartBar
  },
  {
    title: 'Integrations With Your Stack',
    description: 'Seamlessly connect our AI solutions with your existing software ecosystem.',
    icon: Plug
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI Solutions That Scale Your Business
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our intelligent systems automate complex workflows and unlock new opportunities.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mt-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)"
              }}
              className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-gray-100 transition-all"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;