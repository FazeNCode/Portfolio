import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
// drei is a utility package for threejs, tools which can be used to enchance threejs
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import CanvasLoader from "../Loader";


const Slime = () => {
const slime = useGLTF("./slime_scene/scene.gltf");
const { nodes, materials, animations} = useGLTF("./slime_scene/scene.gltf");

  const { actions } = useAnimations(animations);
  const animationToPlay = '';

  useEffect(() => {
    console.log(animations); // Log available actions
    const clip = actions[animationToPlay]; // Use animationToPlay to access the desired animation
    if (clip) {
      clip.reset();
      clip.play();
    }
  }, [actions, animationToPlay]);


//   return (
//     <group>
//       <primitive object={nodes.Object_6}   />
//       <primitive object={nodes.Object_9}   />
//       {/* Add other nodes, materials, or components here */}
//     </group>
//   );
// };


  return (
    <mesh>
    <hemisphereLight intensity={0.5} groundColor="#191919" />
    <pointLight intensity={0.5} />
    <spotLight position={[-60, 10, 10]}
    angle={1}
    penumbra={1}
    intensity={1}
    castShadow
    shadow-mapSize={1024} />
    <primitive 
    object={slime.scene} 
    scale= {25}
    position={[-60, -20, -9]}
    rotation={[0, 1.5, 0]}  />
    </mesh>

);
};
 
const SlimeCanvas = () => {
    return (
      <div className="h-full">
          <Canvas frameloop="demand"
          shadows
          camera={{position: [10, 0.2, 0.2], fov: 100}}
          gl={{preserveDrawingBuffer: true}}
          >
      {/*Fall back component. In this component loading percentage will be displayed when rendering the gltf  */}
      <Suspense fallback={<CanvasLoader/>} >
  
 {/* enableZoom is set to flase so users can't zoom in or out on the 3d model.*/}
      <OrbitControls
      // autoRotate={true}
      enableRotate={true}
      autoRotateSpeed={0}
      enableZoom={false}
      // PolarAngle is used so users can't rotate the gltf scene freely.
      // maxPoLarAngle={Math.PI / 10}
      // minPoLarAngle={Math.PI / 10}
      />
      <Slime/>
      </Suspense>
      <Preload all />
  
      </Canvas>
      </div>
    );
  };
  export default SlimeCanvas;
  


  
// import React, { useRef, useEffect } from 'react';
// import { useGLTF, useAnimations } from '@react-three/drei';
// import { useCharacterAnimations } from './useCharacterAnimations';
// import { OrbitControls, Preload } from "@react-three/drei";

// const Slime = () => {
//   const group = useRef();
//   const { nodes, materials, animations } = useGLTF('./slime_scene/slimemaple.glb');
//   const { setAnimations, animationIndex } = useCharacterAnimations();
//   const { actions, names } = useAnimations(animations, group);

//   useEffect(() => {
//     setAnimations(names);
//   }, [names]);

//   useEffect(() => {

//     console.log("Names:", names);
//     actions[names[animationIndex]].reset().fadeIn(1).play();
//     return () => {
//       actions[names[animationIndex]].fadeOut(0.5);
//     };
//   }, [actions, animationIndex]);

//   return (
//     <group ref={group} dispose={null} scale={[1, 1, 1]}>
//       <primitive object={nodes.Scene} />

//       <ambientLight />
//       <hemisphereLight intensity={0} groundColor="black" />
//        <directionalLight position={[4, 5, 5]} castShadow intensity={1} />
//         <pointLight intensity={1} />
//       <spotLight
//           position={[-60, 90, 40]}
//           angle={0.7}
//           penumbra={1}
//           intensity={0.1}
//           castShadow
//           shadow-mapSize={1024}
//         />

// <OrbitControls
//         enableZoom={false}
//         enablePan={false}
//         enableDamping={true}
//         dampingFactor={0.25}
//         autoRotate={false}
//         maxPolarAngle={Math.PI / 2.5}
//         minPolarAngle={Math.PI / 2.5}
//         position={[-0, 0, 0]} // Adjust the camera position here
//       />

//     </group>
//   );
// };

// export default Slime;

