import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useCharacterAnimations } from './useCharacterAnimations';
import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
// import * as TWEEN from 'tween.js'; // Import TWEEN from tween.js

const Bird = () => {
  const group = useRef();
  const { nodes, animations } = useGLTF('./birds_scene/birds2.glb');
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


  const speed = 1;
  const resetThreshold = 28;
  useFrame((state, delta) => {
    group.current.position.x -= delta * speed;

    // Check if the bird is beyond the reset threshold
    if (group.current.position.x < -resetThreshold) {
      // Reset the bird's position to the starting point
      group.current.position.x = resetThreshold;
    }
  });


  // const resetThreshold = 20;
  // const verticalRange = 5; // Set the range for vertical movement

  // // Use Tween.js to animate the bird's position horizontally and vertically
  // const animateBird = () => {
  //   new TWEEN.Tween(group.current.position)
  //     .to({ x: -resetThreshold, y: verticalRange }, 20000)
  //     .easing(TWEEN.Easing.Quadratic.InOut)
  //     .onComplete(() => {
  //       // Reverse the vertical movement
  //       new TWEEN.Tween(group.current.position)
  //         .to({ x: -resetThreshold, y: -verticalRange }, 10000)
  //         .easing(TWEEN.Easing.Quadratic.InOut)
  //         .onComplete(() => {
  //           group.current.position.x = resetThreshold;
  //           animateBird(); // Restart the animation
  //         })
  //         .start();
  //     })
  //     .start();
  // };

  // useEffect(() => {
  //   animateBird(); // Start the animation when the component mounts
  // }, []);

  // // Update Tween.js on each frame
  // useFrame(() => {
  //   TWEEN.update();
  // });


  return (
    <group ref={group} dispose={null} scale={[6, 6, 6]}>
      <primitive object={nodes.Scene} scale={0.7} position={[2, -.2, 0]} rotation={[0, 1.5, 0]} />
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
