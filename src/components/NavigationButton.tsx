import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Gift } from 'lucide-react';

interface NavigationButtonProps {
  isShowingGallery: boolean;
  toggleView: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ 
  isShowingGallery,
  toggleView
}) => {
  return (
    <motion.button
      onClick={toggleView}
      className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-baby-pink-400 to-lavender-400 text-white font-poppins font-medium shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
    >
      {isShowingGallery ? (
        <>
          <Gift size={20} />
          <span>Back to Greeting</span>
        </>
      ) : (
        <>
          <Camera size={20} />
          <span>View Photo Gallery</span>
        </>
      )}
    </motion.button>
  );
};

export default NavigationButton;