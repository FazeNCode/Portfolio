import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useCharacterAnimations } from './useCharacterAnimations';
import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
// import * as TWEEN from 'tween.js'; // Import TWEEN from tween.js

const Bird = () => {
  const group = useRef();
  const { nodes, animations } = useGLTF('./birds_scene/birds.glb');
  const { setAnimations, animationIndex } = useCharacterAnimations();
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    setAnimations(names);
  }, [names]);

  useEffect(() => {
    actions[names[animationIndex]].reset().fadeIn(1).play('Scene');
    return () => {
      actions[names[animationIndex]].fadeOut(0.5);
    };
  }, [actions, animationIndex]);


  // const speed = 1;
  // const resetThreshold = 28;
  // useFrame((state, delta) => {
  //   group.current.position.x -= delta * speed;

  //   // Check if the bird is beyond the reset threshold
  //   if (group.current.position.x < -resetThreshold) {
  //     // Reset the bird's position to the starting point
  //     group.current.position.x = resetThreshold;
  //   }
  // });






  return (
    <group ref={group} dispose={null} scale={[3, 3, 3]}>
      <primitive object={nodes.Scene} scale={0.4} position={[2, -0.2, 0]} rotation={[0, 1.5, 0]} />
      <ambientLight />
      <hemisphereLight intensity={0} groundColor="" />
      <directionalLight position={[1, 1, 1]} castShadow intensity={1} />
      <pointLight intensity={1} />
      <spotLight position={[-60, 90, 40]} angle={0.7} penumbra={1} intensity={0.1} castShadow shadow-mapSize={1024} />

      <OrbitControls
        enableRotate={false}
        autoRotate={false}
        autoRotateSpeed={0}
        enableZoom={false}
        enablePan={true}
        enableDamping={true}
        dampingFactor={1}
        maxPolarAngle={Math.PI / 2.5}
        minPolarAngle={Math.PI / 2.5}
        position={[1, 0, 0]}
      />
    </group>
  );
};
export default Bird;
