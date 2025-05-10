import React from 'react';
import { motion } from 'framer-motion';

const AvatarAnimation: React.FC = () => {
  return (
    <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96">
      {/* Floating base with golden glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-8">
        <div className="absolute inset-0 bg-gradient-radial from-amber-400/20 via-amber-300/10 to-transparent rounded-full blur-xl"></div>
      </div>
      
      {/* Main avatar container with enhanced hover animation */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ 
          y: [0, -20, 0], // Increased hover height
          rotate: [0, 1, 0, -1, 0]
        }}
        transition={{ 
          y: {
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut"
          },
          rotate: {
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut"
          }
        }}
      >
        {/* Soft golden glow effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-300/10 via-amber-200/5 to-amber-300/10 rounded-full blur-3xl"></div>
        
        {/* Particle effects */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-amber-300/60 to-amber-200/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0, 1.5, 0],
                y: [0, -20, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2 + Math.random() * 2,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Rotating energy rings */}
        {[1, 2, 3].map((ring) => (
          <motion.div
            key={ring}
            className="absolute inset-0 border-2 rounded-full"
            style={{
              borderColor: `rgba(251, 191, 36, ${0.1 / ring})`,
            }}
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{
              rotate: {
                repeat: Infinity,
                duration: 10 * ring,
                ease: "linear"
              },
              scale: {
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
              }
            }}
          />
        ))}

        {/* AI Robot Image */}
        <motion.div
          className="relative z-10 w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 flex items-center justify-center"
          animate={{ 
            boxShadow: [
              "0 0 30px rgba(251, 191, 36, 0.1)",
              "0 0 40px rgba(251, 191, 36, 0.2)",
              "0 0 30px rgba(251, 191, 36, 0.1)"
            ]
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut"
          }}
        >
          <img 
            src="https://i.imgur.com/Jr3GLu7.png" 
            alt="AI Robot"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Orbiting elements */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 8 + i * 2,
            ease: "linear",
            delay: i * 0.5
          }}
        >
          <motion.div
            className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-amber-400/60 to-amber-300/40"
            style={{
              transform: `rotate(${i * 90}deg) translateX(${100 + i * 10}px)`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default AvatarAnimation;