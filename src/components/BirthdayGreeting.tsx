import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactConfetti from 'react-confetti';
import GiftBox from './GiftBox';
import { Heart, Sparkles, Cake } from 'lucide-react';
import BirthdayMessage from './BirthdayMessage';

const BirthdayGreeting: React.FC = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [showConfetti, setShowConfetti] = useState(false);
  
  useEffect(() => {
    // Start confetti after a small delay for better experience
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 800);
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 * i,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };
  
  return (
    <motion.div 
      className="max-w-4xl mx-auto py-8 px-4 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {showConfetti && (
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.05}
          colors={['#ffa2ca', '#ff77b0', '#fc4d93', '#bfb8fc', '#a28ff8']}
          tweenDuration={10000}
        />
      )}
      
      <div className="text-center mb-10">
        <motion.div 
          className="inline-block"
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
          transition={{ 
            duration: 1,
            ease: "easeOut",
            times: [0, 0.3, 0.6, 1]
          }}
        >
          <Cake size={80} className="text-baby-pink-500 mx-auto mb-4" />
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-6xl font-bold font-dancing text-baby-pink-600 mb-2"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          Happy Birthday!
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl font-dancing text-lavender-700"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          Wishing you a day filled with happiness and a year filled with joy!
        </motion.p>
      </div>
      
      <motion.div 
        className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="relative">
          <motion.div
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 2 
            }}
          >
            <GiftBox />
          </motion.div>
          
          <motion.div
            className="absolute -top-4 -right-2"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 3 
            }}
          >
            <Sparkles size={24} className="text-lavender-400" />
          </motion.div>
        </div>
        
        <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg max-w-screen-lg">
          <motion.h2 
            className="text-2xl font-dancing text-baby-pink-500 mb-4"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            On this special day...
          </motion.h2>
          
          <BirthdayMessage />
          
          <motion.div 
            className="flex justify-end"
            custom={4}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <Heart className="text-baby-pink-400" fill="#ff77b0" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BirthdayGreeting;