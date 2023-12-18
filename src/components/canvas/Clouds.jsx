import React from 'react';
import { Clouds } from '@react-three/drei';

const Clouds = () => {
  return (
    <Clouds
      scale={5} // Adjust the scale of the clouds
      opacity={0.5} // Adjust the opacity of the clouds
    />
  );
};

export default Clouds;