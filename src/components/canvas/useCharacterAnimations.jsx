// components/useCharacterAnimations.js

// COMMENT OUT THIS CODE FOR THE PREVIOUS WORKING ANIMATION


import { useState } from 'react';

export function useCharacterAnimations() {
  const [animations, setAnimations] = useState([]);
  const [animationIndex, setAnimationIndex] = useState(0);

  // Additional logic related to character animations

  return {
    animations,
    setAnimations,
    animationIndex,
    setAnimationIndex,
  };
}