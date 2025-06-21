import React, { useState, useEffect, useRef } from 'react';
import { Music, VolumeX } from 'lucide-react';
import { Howl } from 'howler';
// import wishes from '../assets/wishes.mp3'; // Adjust the path as necessary

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef<Howl | null>(null);
  
  useEffect(() => {
    // Birthday song URL - this is a free-to-use happy birthday music
    const musicUrl = 'https://assets.mixkit.co/music/preview/mixkit-a-happy-child-111.mp3';
    
    soundRef.current = new Howl({
      src: [musicUrl],
      loop: true,
      volume: 0.5,
      autoplay: false,
    });
    
    return () => {
      if (soundRef.current) {
        soundRef.current.stop();
      }
    };
  }, []);
  
  const toggleMusic = () => {
    if (!soundRef.current) return;
    
    if (isPlaying) {
      soundRef.current.pause();
    } else {
      soundRef.current.play();
    }
    
    setIsPlaying(!isPlaying);
  };
  
  return (
    <div className="fixed top-4 right-4 z-20">
      <button
        onClick={toggleMusic}
        className={`rounded-full p-3 transition-all duration-300 shadow-md ${
          isPlaying 
            ? 'bg-baby-pink-400 text-white hover:bg-baby-pink-500' 
            : 'bg-white text-baby-pink-500 hover:bg-gray-100'
        }`}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? <Music size={20} /> : <VolumeX size={20} />}
      </button>
    </div>
  );
};

export default MusicPlayer;