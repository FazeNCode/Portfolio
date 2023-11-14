
import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useCharacterAnimations } from './useCharacterAnimations';
import { OrbitControls, Preload } from "@react-three/drei";

const OrangeMushroom = () => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('./orangemushroom_scene/orangemush.glb');
  const { setAnimations, animationIndex } = useCharacterAnimations();
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    setAnimations(names);
  }, [names]);

  useEffect(() => {

    console.log("Names:", names);
    actions[names[animationIndex]].reset().fadeIn(2).play('Death');
    return () => {
      actions[names[animationIndex]].fadeOut(0.5);
    };
  }, [actions, animationIndex]);

  return (
    <group ref={group} dispose={null} scale={[0.5, 0.5, 0.5]}>
      <primitive object={nodes.Scene} />

      <ambientLight />
//         <hemisphereLight intensity={0} groundColor="black" />
//         <directionalLight position={[4, 5, 5]} castShadow intensity={1} />
//         <pointLight intensity={1} />
//         <spotLight
          position={[-60, 90, 40]}
          angle={0.7}
          penumbra={1}
          intensity={0.1}
          castShadow
          shadow-mapSize={1024}
        />
    </group>
  );
};

export default OrangeMushroom;

