import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
        <div className="spinner"></div>
        <p className="loader-text">
          {progress.toFixed(2)}%
        </p>
 
    </Html>
  );
};

export default Loader;


