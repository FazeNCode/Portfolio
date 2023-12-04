import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations, OrbitControls} from '@react-three/drei';
import { useCharacterAnimations } from './useCharacterAnimations';
// import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const MushroomHouse = () => {
  const group = useRef();
  const { nodes, animations } = useGLTF('./mushroomhouse_scene/mushroomtown.glb');
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

  const getPosition = () => {
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    if (windowHeight > 600) {
      return [-1.5, -1.5, -1.5]; // Small screens
    } else if (windowHeight > 1200) {
      return [-4, -4, -1.5]; // Medium screens
    } else {
      return [-5, -5, -2]; // Large screens
    }
  };


  //  // Use useFrame to animate the models
  //  useFrame((state, delta) => {
  //   // You can adjust the speed and range as needed
  //   const speed = .1;
  //   const range = 1;

  //   // Move the group left and right
  //   group.current.position.x = getPosition()[0] + range * Math.sin(state.clock.elapsedTime * speed);
  // });

// position={[-2, -1.5, -1.5]}  

  return (
    <group ref={group} dispose={null} scale={[1, 1, 1]}>
   <primitive object={nodes.Scene} scale={1}  position={getPosition()} rotation={[-0.15, 0, 0]} />
      <ambientLight />
      <hemisphereLight intensity={0} groundColor="black" />
      <directionalLight position={[-5, 5, -5]} castShadow intensity={0.4} />
      <pointLight intensity={-0.5} />
      <spotLight position={[100, 100, -100]} angle={0.7} penumbra={1} intensity={0.5} castShadow shadow-mapSize={1024} />

      <OrbitControls
        enableRotate={false}
        enableZoom={false}
        enablePan={true}
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


