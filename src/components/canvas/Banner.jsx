
import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useCharacterAnimations } from './useCharacterAnimations';
import { OrbitControls, Preload } from "@react-three/drei";

const Banner = () => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('./banner_scene/banner.glb',

  );
  const { setAnimations, animationIndex } = useCharacterAnimations();
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    setAnimations(names);
  }, [names]);

  useEffect(() => {

    console.log("Names:", names);
    actions[names[animationIndex]].reset().fadeIn(1).play('');
    return () => {
      actions[names[animationIndex]].fadeOut(0.5);
    };
  }, [actions, animationIndex]);

  
  return (

    // <group ref={group} dispose={null} scale={[2, 2, 2]}>

    // <primitive
    //     object={nodes.Scene}
    //     scale={0.22}
    //     position={[0, 0.6, 2.1]}
    //     rotation={[0, Math.PI / -2, 0.4]}  
    //   />  



  <group ref={group} dispose={null} scale={[2, 2, 1.18]}>
 <primitive
     object={nodes.Scene}
     scale={1}
     position={[0, -0.1, 2.1]}
     rotation={[0, Math.PI / -2, 0.4]}  
   />   

      <ambientLight />
       <hemisphereLight intensity={0} groundColor="black" />
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
export default Banner;
