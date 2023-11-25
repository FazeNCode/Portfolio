import React, { useRef, useEffect, Suspense } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useCharacterAnimations } from './useCharacterAnimations';
import { OrbitControls, Preload } from "@react-three/drei";


const Bird = () => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('./birds_scene/birds2.glb',

  );
  const { setAnimations, animationIndex } = useCharacterAnimations();
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    setAnimations(names);
  }, [names]);

  useEffect(() => {
    console.log("Names:", names);
    actions[names[animationIndex]].reset().fadeIn(1).play('Scene');
    return () => {
      actions[names[animationIndex]].fadeOut(0.5);
    };
  }, [actions, animationIndex]);
  
  return (
    <group ref={group} dispose={null} scale={[3, 3, 3]}>
    <primitive object={nodes.Scene}
     scale= {1}
     position={[1.1, -0.5, -0.4]} 
    rotation={[0, 1.5, 60]}  
     />

      <ambientLight />
       <hemisphereLight intensity={0} groundColor="" />
        <directionalLight position={[1, 1, 1]} castShadow intensity={1} />
      <pointLight intensity={1} />
     <spotLight
          position={[-60, 90, 40]}
          angle={0.7}
          penumbra={1}
          intensity={0.1}
          castShadow
          shadow-mapSize={1024}
        />

<OrbitControls
        enableRotate={true}
        autoRotate={false}
        autoRotateSpeed={3}
        enableZoom={false}
        enablePan={true}
        enableDamping={true}
        dampingFactor={1}
        maxPolarAngle={Math.PI / 2.5}
        minPolarAngle={Math.PI / 2.5}
        position={[0, 0, 0]} // Adjust the camera position here
      />
  
    </group>
  );
};
export default Bird;

