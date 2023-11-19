

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