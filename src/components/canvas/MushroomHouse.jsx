import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations, OrbitControls} from '@react-three/drei';
import { useCharacterAnimations } from './useCharacterAnimations';
// import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const MushroomHouse = () => {
  const group = useRef();
  const { nodes, animations } = useGLTF('./mushroomhouse_scene/m2.glb');
  const { setAnimations, animationIndex } = useCharacterAnimations();
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    setAnimations(names);
  }, [names]);

  useEffect(() => {
    console.log("Names:", names);
    // Reset all animations
    animations.forEach((clip) => {
      const action = actions[clip.name];
      action.reset();
      action.setEffectiveWeight(1); // Set the weight for each animation
      action.fadeIn(1).play(); // Fade in and play each animation
    });

    return () => {
      // Fade out all animations
      animations.forEach((clip) => {
        const action = actions[clip.name];
        action.fadeOut(0.5);
      });
    };
  }, [actions, animations, animationIndex]);


  
// CHANGE THE X-AXIS TO 10 FOR ANYTHING WHENS SCREEN SIZE IS BIGGER THAN IPHONE 12 PRO COPY THE BELOW
//  position={[10, -3.5, -60]} 

  return (
    <group ref={group} dispose={null} scale={[3, 3, 1.6]}>
   <primitive object={nodes.Scene} scale={2.5} position={[5, -3.5, -60]} rotation={[-0.05, -0.2, 0]} />
   
      <ambientLight />
      <hemisphereLight intensity={0} groundColor="black" />
      <directionalLight position={[-5, 5, -5]} castShadow intensity={0.4} />
      <pointLight intensity={-0.5} />
      <spotLight position={[100, 100, -100]} angle={0.7} penumbra={1} intensity={0.5} castShadow shadow-mapSize={1024} />

      <OrbitControls
        enableRotate={false}
        enableZoom={false}
        enablePan={false}
        enableDamping={false}
        dampingFactor={0.25}
        autoRotate={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        position={[10, 30, 0]}
    
      />
    </group>
  );
};
export default MushroomHouse;









