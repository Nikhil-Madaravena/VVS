import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import bearGif from '../assets/milk-and-mocha.gif'; // Adjust the path as necessary

const GiftBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  
  const handleClick = () => {
    setIsOpen(!isOpen);
    if (!hasOpened) setHasOpened(true);
  };
  
  return (
    <motion.div 
      className="relative w-48 h-48 cursor-pointer"
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Box shadow and glow effect */}
      <motion.div
        className="absolute inset-0 bg-baby-pink-300 rounded-2xl blur-xl"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Box base */}
      <motion.div 
        className="absolute bottom-0 w-full h-3/4 bg-gradient-to-br from-baby-pink-400 to-baby-pink-500 rounded-2xl shadow-lg"
        animate={{ 
          scale: isOpen ? [1, 1.1, 1] : 1,
          y: isOpen ? [0, -10, 0] : 0
        }}
        transition={{ 
          duration: 0.5,
          times: isOpen ? [0, 0.5, 1] : [0]
        }}
      >
        {/* Box decorations */}
        <div className="absolute top-1/2 left-0 w-full h-2 bg-white opacity-30"></div>
        <div className="absolute top-0 left-1/2 w-2 h-full bg-white opacity-30 -translate-x-1/2"></div>
        
        {/* Sparkle effects */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              className="absolute -right-2 -top-2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <Sparkles className="text-lavender-300" size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Box lid */}
      <motion.div
        className="absolute top-0 w-full h-1/4 bg-gradient-to-br from-baby-pink-500 to-baby-pink-600 rounded-t-2xl origin-bottom shadow-lg"
        animate={{ 
          rotateX: isOpen ? -120 : 0,
          y: isOpen ? -20 : 0
        }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 10
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Ribbon */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div 
            className="w-20 h-20"
            animate={{
              rotate: hasOpened ? 360 : 0,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <div className="absolute top-1/2 left-0 w-full h-6 bg-gradient-to-r from-lavender-400 to-lavender-500 rounded-full"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-full bg-gradient-to-b from-lavender-400 to-lavender-500 rounded-full"></div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Surprise elements */}
      <AnimatePresence>
        {isOpen && (
          <>
              <motion.div
                className="fixed z-50"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1.2, 1],
                  opacity: 1
                  // Remove 'y' to preserve center
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <div className="text-4xl">
                  <img className="w-50 h-50" src={bearGif} alt="Bear Animation" />
                </div>
              </motion.div>
            
            {/* Flying hearts */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{ 
                  scale: 0,
                  opacity: 0,
                  x: 0,
                  y: 0
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  x: [(i - 2) * 30, (i - 2) * 60],
                  y: [0, -100],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
              >
                <Heart className="text-baby-pink-400" fill="#ff77b0" size={24} />
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default GiftBox;