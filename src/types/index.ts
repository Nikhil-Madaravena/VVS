export type AnimationControls = {
  start: () => void;
  stop: () => void;
  isActive: boolean;
};

export type MusicControl = {
  play: () => void;
  pause: () => void;
  isPlaying: boolean;
};