import React from 'react';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Lightbulb } from 'lucide-react';

const features = [
  {
    title: 'Enterprise-grade Security',
    description: 'Your data is protected with bank-level encryption and rigorous security protocols.',
    icon: Shield
  },
  {
    title: 'Measurable Results',
    description: 'AI solutions with clear metrics and proven ROI for your business.',
    icon: TrendingUp
  },
  {
    title: 'Innovative Approach',
    description: 'Custom solutions built with cutting-edge AI techniques and technologies.',
    icon: Lightbulb
  }
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Bolt by Bigscreen AI?
            </h2>
            <p className="text-gray-600 mb-8">
              At Bigscreen AI, we transform how businesses operate through intelligent automation. Our team of AI specialists designs custom solutions that address your unique challenges and unlock new possibilities.
            </p>
            <p className="text-gray-600 mb-8">
              We don't just implement technology; we create strategic advantages that drive growth and efficiency. Our solutions are built to scale with your business and adapt to changing needs.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-blue-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Abstract representation of AI technology */}
            <div className="relative h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-white border border-gray-100 shadow-sm">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMjkzZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDJ2MmgtMnpNNDAgMzRoMnYyaC0yek00NCAzNGgydjJoLTJ6TTM0IDM2aDJ2MmgtMnpNMzggMzZoMnYyaC0yek00MiAzNmgydjJoLTJ6TTMyIDM4aDJ2MmgtMnpNMzYgMzhoMnYyaC0yek00MCAzOGgydjJoLTJ6TTQ0IDM4aDJ2MmgtMnpNMzQgNDBoMnYyaC0yek0zOCA0MGgydjJoLTJ6TTQyIDQwaDJ2MmgtMnpNMzYgNDJoMnYyaC0yek00MCA0MmgydjJoLTJ6TTQ0IDQyaDJ2MmgtMnpNMzQgNDRoMnYyaC0yek0zOCA0NGgydjJoLTJ6TTQyIDQ0aDJ2MmgtMnpNMzYgNDZoMnYyaC0yek00MCA0NmgydjJoLTJ6TTQ0IDQ2aDJ2MmgtMnpNMzQgNDhoMnYyaC0yek0zOCA0OGgydjJoLTJ6TTQyIDQ4aDJ2MmgtMnpNMzYgNTBoMnYyaC0yek00MCA1MGgydjJoLTJ6TTQ0IDUwaDJ2MmgtMnpNMzIgMzRoMnYyaC0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
              
              {/* Animated nodes and connections */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-md">
                  {/* Nodes */}
                  {[...Array(24)].map((_, i) => {
                    const x = 30 + Math.random() * 60;
                    const y = 30 + Math.random() * 60;
                    const size = 4 + Math.random() * 8;
                    const delay = Math.random() * 5;
                    
                    return (
                      <motion.div
                        key={i}
                        className="absolute rounded-full bg-blue-400"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          width: size,
                          height: size,
                          opacity: 0.2 + Math.random() * 0.5
                        }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.2 + Math.random() * 0.5, 0.6, 0.2 + Math.random() * 0.5]
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 4 + Math.random() * 3,
                          delay: delay
                        }}
                      />
                    );
                  })}
                  
                  {/* Main nodes */}
                  {[...Array(5)].map((_, i) => {
                    const x = 20 + (i * 15);
                    const y = 30 + (Math.random() * 40);
                    
                    return (
                      <motion.div
                        key={`main-${i}`}
                        className="absolute rounded-full bg-gradient-to-b from-blue-400 to-cyan-300 shadow-md z-10"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          width: 20,
                          height: 20
                        }}
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 3 + i,
                          delay: i * 0.5
                        }}
                      />
                    );
                  })}
                  
                  {/* Center node */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-400/30 backdrop-blur-sm flex items-center justify-center shadow-lg z-20"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                  >
                    <div className="text-white font-bold text-center">
                      <div className="text-xl bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Bolt</div>
                      <div className="text-xs text-blue-900/60">by Bigscreen AI</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;