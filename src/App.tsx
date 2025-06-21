import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import BirthdayGreeting from './components/BirthdayGreeting';
import PhotoGallery from './components/PhotoGallery';
import MusicPlayer from './components/MusicPlayer';
import NavigationButton from './components/NavigationButton';
import BackgroundElements from './components/BackgroundElements';

function App() {
  const [showGallery, setShowGallery] = useState(false);
  
  return (
    <div className="min-h-screen overflow-hidden relative bg-gradient-to-b from-baby-pink-100 to-baby-pink-200">
      <BackgroundElements />
      
      <MusicPlayer />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <AnimatePresence mode="wait">
          {!showGallery ? (
            <BirthdayGreeting key="greeting" />
          ) : (
            <PhotoGallery key="gallery" />
          )}
        </AnimatePresence>
        
        <div className="flex justify-center mt-10">
          <NavigationButton 
            isShowingGallery={showGallery} 
            toggleView={() => setShowGallery(!showGallery)} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;