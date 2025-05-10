import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AvatarAnimation from './AvatarAnimation';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/30 -z-10"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMjkzZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0aDJ2MmgtMnpNNDAgMzRoMnYyaC0yek00NCAzNGgydjJoLTJ6TTM0IDM2aDJ2MmgtMnpNMzggMzZoMnYyaC0yek00MiAzNmgydjJoLTJ6TTMyIDM4aDJ2MmgtMnpNMzYgMzhoMnYyaC0yek00MCAzOGgydjJoLTJ6TTQ0IDM4aDJ2MmgtMnpNMzQgNDBoMnYyaC0yek0zOCA0MGgydjJoLTJ6TTQyIDQwaDJ2MmgtMnpNMzYgNDJoMnYyaC0yek00MCA0MmgydjJoLTJ6TTQ0IDQyaDJ2MmgtMnpNMzQgNDRoMnYyaC0yek0zOCA0NGgydjJoLTJ6TTQyIDQ0aDJ2MmgtMnpNMzYgNDZoMnYyaC0yek00MCA0NmgydjJoLTJ6TTQ0IDQ2aDJ2MmgtMnpNMzQgNDhoMnYyaC0yek0zOCA0OGgydjJoLTJ6TTQyIDQ4aDJ2MmgtMnpNMzYgNTBoMnYyaC0yek00MCA1MGgydjJoLTJ6TTQ0IDUwaDJ2MmgtMnpNMzIgMzRoMnYyaC0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50 -z-10"></div>

      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <motion.div 
          className="w-full md:w-1/2 text-center md:text-left z-10 mb-16 md:mb-0"
          style={{ opacity, y: translateY }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block">Automate Smarter.</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Grow Faster.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl mx-auto md:mx-0">
            Bolt by Bigscreen AI is your AI automation partner — we build intelligent systems that scale your business.
          </p>
          <button 
            onClick={handleScrollToContact}
            className="bg-gradient-to-r from-amber-300 to-amber-400 hover:from-amber-400 hover:to-amber-500 px-8 py-3 rounded-full font-medium text-gray-800 shadow-md hover:shadow-lg transition-all"
          >
            Start Your AI Journey
          </button>
        </motion.div>

        {/* 3D Avatar */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center md:justify-end"
          style={{ opacity, y: translateY }}
        >
          <AvatarAnimation />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center">
          <div className="w-1.5 h-3 bg-gray-300 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;