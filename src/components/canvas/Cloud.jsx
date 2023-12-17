import React from 'react';
import { Clouds, Sky as SkyImpl, CameraControls, StatsGl } from '@react-three/drei';

const Cloud = () => {
  return (
    <>
      {/* Add a Sky to the scene */}
      <SkyImpl sunPosition={[1, 1, 1]} />

      {/* Add clouds to create a misty effect */}
      <Clouds
        scale={20} // Adjust the scale of the clouds (try different values)
        opacity={0.5} // Adjust the opacity of the clouds
      />

      {/* Add camera controls for navigation */}
      <CameraControls />

      {/* Add stats for performance monitoring (optional) */}
      {/* <StatsGl /> */}
    </>
  );
};

export default Cloud;