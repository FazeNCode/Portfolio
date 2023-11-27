import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useCharacterAnimations } from './useCharacterAnimations';
import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

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

  const speed = 0.5;
  const resetThreshold = 9;

  useFrame((state, delta) => {
    group.current.position.x -= delta * speed;

    // Check if the bird is beyond the reset threshold
    if (group.current.position.x < -resetThreshold) {
      // Reset the bird's position to the starting point
      group.current.position.x = resetThreshold;
    }
  });

  return (
    <group ref={group} dispose={null} scale={[5, 5, 5]}>
      <primitive object={nodes.Scene} scale={1} position={[-0.5, 0, 0]} rotation={[0, 1.5, 0]} />
      <ambientLight />
      <hemisphereLight intensity={0} groundColor="" />
      <directionalLight position={[1, 1, 1]} castShadow intensity={1} />
      <pointLight intensity={1} />
      <spotLight position={[-60, 90, 40]} angle={0.7} penumbra={1} intensity={0.1} castShadow shadow-mapSize={1024} />

      <OrbitControls
        enableRotate={true}
        autoRotate={false}
        autoRotateSpeed={0.5}
        enableZoom={false}
        enablePan={true}
        enableDamping={true}
        dampingFactor={1}
        maxPolarAngle={Math.PI / 2.5}
        minPolarAngle={Math.PI / 2.5}
        position={[0, 0, 0]}
      />
    </group>
  );
};
export default Bird;
