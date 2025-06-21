import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Heart, Share2 } from 'lucide-react';
import { photoData } from '../data/photoData';

const PhotoGallery: React.FC = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number | null>(null);
  const [likedPhotos, setLikedPhotos] = useState<Set<number>>(new Set());
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const toggleLike = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedPhotos(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };
  
  const openPhoto = (index: number) => {
    setCurrentPhotoIndex(index);
  };
  
  const closePhoto = () => {
    setCurrentPhotoIndex(null);
  };
  
  const goToNextPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentPhotoIndex === null) return;
    setCurrentPhotoIndex((prevIndex) => 
      prevIndex === photoData.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const goToPrevPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentPhotoIndex === null) return;
    setCurrentPhotoIndex((prevIndex) => 
      prevIndex === 0 ? photoData.length - 1 : prevIndex - 1
    );
  };

  const handleShare = async (e: React.MouseEvent, caption: string) => {
    e.stopPropagation();
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Birthday Memories',
          text: `Check out this birthday moment: ${caption}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    }
  };
  
  return (
    <motion.div
      className="max-w-6xl mx-auto py-8 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        className="text-3xl md:text-4xl font-dancing text-center text-baby-pink-600 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Memories to Cherish
      </motion.h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photoData.map((photo, index) => (
          <motion.div
            key={photo.id}
            className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square bg-white"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onClick={() => openPhoto(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.img 
              src={photo.url} 
              alt={photo.caption} 
              className="w-full h-full object-cover transition-transform duration-700"
              animate={{
                scale: hoveredIndex === index ? 1.1 : 1,
              }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
            >
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-poppins text-lg mb-3">
                  {photo.caption}
                </p>
                <div className="flex items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => toggleLike(photo.id, e)}
                    className={`p-2 rounded-full ${
                      likedPhotos.has(photo.id) 
                        ? 'bg-baby-pink-500 text-white' 
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    <Heart 
                      size={20} 
                      fill={likedPhotos.has(photo.id) ? 'white' : 'none'}
                    />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => handleShare(e, photo.caption)}
                    className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30"
                  >
                    <Share2 size={20} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
      
      {/* Lightbox */}
      <AnimatePresence>
        {currentPhotoIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePhoto}
          >
            <motion.div
              className="relative max-w-5xl max-h-[90vh] w-full mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute -top-12 right-0 z-10 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors"
                onClick={closePhoto}
              >
                <X size={24} className="text-white" />
              </button>
              
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-3 transition-colors"
                onClick={goToPrevPhoto}
              >
                <ChevronLeft size={28} className="text-white" />
              </button>
              
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-3 transition-colors"
                onClick={goToNextPhoto}
              >
                <ChevronRight size={28} className="text-white" />
              </button>
              
              <motion.img 
                key={currentPhotoIndex}
                src={photoData[currentPhotoIndex].url} 
                alt={photoData[currentPhotoIndex].caption} 
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center justify-between">
                  <p className="text-white font-poppins text-xl">
                    {photoData[currentPhotoIndex].caption}
                  </p>
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => toggleLike(photoData[currentPhotoIndex].id, e)}
                      className={`p-2 rounded-full ${
                        likedPhotos.has(photoData[currentPhotoIndex].id) 
                          ? 'bg-baby-pink-500 text-white' 
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      <Heart 
                        size={24} 
                        fill={likedPhotos.has(photoData[currentPhotoIndex].id) ? 'white' : 'none'}
                      />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => handleShare(e, photoData[currentPhotoIndex].caption)}
                      className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30"
                    >
                      <Share2 size={24} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PhotoGallery;