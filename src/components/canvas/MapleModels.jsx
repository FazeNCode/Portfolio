import React, { useRef, useEffect, Suspense } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useCharacterAnimations } from './useCharacterAnimations';
import { OrbitControls, Preload } from "@react-three/drei";
import * as TWEEN from 'tween.js';
import Loader from '../Loader';

const MapleModels = () => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('./mushroomhouse_scene/4models.glb',
 
  );
  const { setAnimations, animationIndex } = useCharacterAnimations();
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    setAnimations(names);
  }, [names]);

  useEffect(() => {
    console.log("Names:", names);
    actions[names[animationIndex]].reset().fadeIn(1).play('Idle');

    return () => {
      actions[names[animationIndex]].fadeOut(0.5);
    };
  }, [actions, animationIndex]);

  return (
    <group ref={group} dispose={null} scale={[1, 1, 1]}>
      <primitive object={nodes.Scene}
       scale= {1.7}
       position={[0.7, -4.3, -7]}
       rotation={[-0.2, 0, 0]}  
        />
      
      {/* <group ref={group} dispose={null} scale={[2, 2, 2]}>
      <primitive object={nodes.Scene}
       scale= {0.09}
       position={[-1, 0, 0]}
       rotation={[-0.1, 0.4, 0]}
        /> */}

      <ambientLight />
       <hemisphereLight intensity={0} groundColor="none" />
        <directionalLight position={[-0.1, -0.1, 1]} castShadow intensity={-1} />
      <pointLight intensity={1} />
     <spotLight
          position={[-60, 9, 10]}
          angle={-0.1}
          penumbra={1}
          intensity={-1}
          castShadow
          shadow-mapSize={1024}
        />

<OrbitControls
        enableRotate={false}
        enableZoom={false}
        enablePan={false}
        enableDamping={true}
        dampingFactor={0.25}
        autoRotate={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        position={[-0, 0, 0]} // Adjust the camera position here
      />
    </group>
  );
};
export default MapleModels;
