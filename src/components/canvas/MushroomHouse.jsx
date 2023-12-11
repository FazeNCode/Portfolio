import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations, OrbitControls} from '@react-three/drei';
import { useCharacterAnimations } from './useCharacterAnimations';
// import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const MushroomHouse = () => {
  const group = useRef();
  const { nodes, animations } = useGLTF('./mushroomhouse_scene/mushroomworld.glb');
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

  // const getPosition = () => {
  //   const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
  //     if (windowHeight >= 370) {
  //       return [-1.5, -3.1, -2.5]; // Small screens
  //     } else if (windowHeight >= 1200) {
  //       return [-4, -4, -1.5]; // Medium screens
  //     } else {
  //       return [-5, -5, -2]; // Large screens
  //     }
  //   };


  

    // const getPosition = () => {
    //   const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    //   const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    //   if (windowWidth === 360 && windowHeight === 360) {
    //     return [-1, -2.955, -3]; // For width 360 and height 360
    //   } else if (windowWidth === 480 && windowHeight === 480) {
    //     return [-1, -2.555, -2.5]; // For width 480 and height 480
    //   } else if (windowWidth === 720 && windowHeight === 720) {
    //     return [-1, -2.3, -2.5]; // For width 720 and height 720
    //   } else if (windowWidth === 1080 && windowHeight === 1080) {
    //     return [-1.5, -2, -2.5]; // For width 1080 and height 1080
    //   } else if (windowWidth <= 375 && windowHeight <= 700) {
    //     return [-1.5, -2.2, -2.5]; // Small screens
    //   } else if (windowWidth >= 720 && windowHeight >= 800) {
    //     return [-4, -1, -1.5]; // Medium screens
    //   } else {
    //     return [-1, -2, -2]; // Large screens
    //   }
    // };


  

  return (
    <group ref={group} dispose={null} scale={[1, 1, 1.2]}>
   <primitive object={nodes.Scene} scale={1} position={[-2, -1.5, -1.5]} rotation={[-0.15, 0, 0]} />
      <ambientLight />
      <hemisphereLight intensity={0} groundColor="black" />
      <directionalLight position={[-5, 5, -5]} castShadow intensity={0.4} />
      <pointLight intensity={-0.5} />
      <spotLight position={[100, 100, -100]} angle={0.7} penumbra={1} intensity={0.5} castShadow shadow-mapSize={1024} />

      <OrbitControls
        enableRotate={false}
        enableZoom={false}
        enablePan={false}
        enableDamping={true}
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


