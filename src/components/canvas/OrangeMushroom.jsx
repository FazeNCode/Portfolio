
import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useCharacterAnimations } from './useCharacterAnimations';
import { OrbitControls, Preload } from "@react-three/drei";

const OrangeMushroom = () => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('./orangemushroom_scene/scene.gltf');
  const { setAnimations, animationIndex } = useCharacterAnimations();
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    setAnimations(names);
  }, [names]);

  useEffect(() => {

    console.log("Names:", names);
    actions[names[animationIndex]].reset().fadeIn(0.5).play();
    return () => {
      // actions[names[animationIndex]].fadeOut(0.5);
    };
  }, [actions, animationIndex]);

  return (
    <group ref={group} dispose={null} scale={[3, 3, 3]}>
      <primitive object={nodes.Scene} />
    </group>
  );
};

export default OrangeMushroom;

