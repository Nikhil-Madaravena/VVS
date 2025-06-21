import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star } from 'lucide-react';

const BackgroundElements: React.FC = () => {
  // Generate random positions for the floating elements
  const generateElements = (count: number, Component: React.ElementType) => {
    return Array.from({ length: count }).map((_, i) => {
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const size = Math.random() * 24 + 12;
      const delay = Math.random() * 5;
      const duration = Math.random() * 10 + 10;
      
      return (
        <motion.div
          key={`${Component.name}-${i}`}
          className="absolute opacity-50"
          style={{ left: `${left}%`, top: `${top}%` }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <Component 
            size={size} 
            className={i % 2 === 0 ? "text-baby-pink-300" : "text-lavender-300"} 
            fill={i % 2 === 0 ? "#ffa2ca" : "#bfb8fc"}
          />
        </motion.div>
      );
    });
  };
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {generateElements(10, Heart)}
      {generateElements(10, Star)}
      
      {/* Balloons */}
      {Array.from({ length: 5 }).map((_, i) => {
        const left = Math.random() * 90 + 5;
        const delay = Math.random() * 3;
        const duration = Math.random() * 10 + 20;
        
        return (
          <motion.div
            key={`balloon-${i}`}
            className="absolute bottom-0 w-10 h-16"
            style={{ left: `${left}%` }}
            animate={{
              y: [0, -window.innerHeight - 100],
              x: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            <div className={`w-full h-full rounded-t-full ${
              i % 3 === 0 ? "bg-baby-pink-400" : 
              i % 3 === 1 ? "bg-lavender-400" : "bg-baby-pink-300"
            }`}></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gray-400"></div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default BackgroundElements;