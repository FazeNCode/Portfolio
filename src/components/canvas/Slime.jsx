
import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useCharacterAnimations } from './useCharacterAnimations';
import { OrbitControls, Preload } from "@react-three/drei";

const Slime = () => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('./slime_scene/slime.glb',
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
    
    <group ref={group} dispose={null} scale={[2, 2, 3]}>
      <primitive object={nodes.Scene}
       scale= {0.4}
       position={[4, -7, -7]} />

 {/* <group ref={group} dispose={null} scale={[1, 1, 1]}>
<group ref={group} dispose={null} scale={[2, 2, 3]}>
      <primitive object={nodes.Scene}
       scale= {0.4}
       position={[0.4, -8, -3.8]} /> */}
       

      {/* <primitive 
    object={slime.scene} 
    scale= {25}
    position={[-60, -20, -9]}
    rotation={[0, 1.5, 0]}  /> */}

      <ambientLight />
       <hemisphereLight intensity={0} groundColor="black" />
        <directionalLight position={[-1, -1, -1]} castShadow intensity={0.2} />
      <pointLight intensity={1} />
     <spotLight
          position={[-60, 90, 40]}
          angle={0.1}
          penumbra={1}
          intensity={0.1}
          castShadow
          shadow-mapSize={1024}
        />

<OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping={true}
        dampingFactor={0.25}
        autoRotate={false}
        maxPolarAngle={Math.PI / 2.5}
        minPolarAngle={Math.PI / 2.5}
        position={[-0, 0, 0]} // Adjust the camera position here
      />

    </group>
  );
};

export default Slime;

