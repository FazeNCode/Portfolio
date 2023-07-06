import { Suspense, useEffect, useState } from "react";

import { Canvas, useFrame } from "@react-three/fiber";

// drei is a utility package for threejs that contains various tools that can be used to enchance threejs
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { geometry } from "maath";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // const youtube = useGLTF("./youtube/scene.gltf");
  return (
    // when using threejs with react, must start with a mesh tag,


      <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight position={[-20, 50, 10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024} />
      
      <primitive object={computer.scene} 
      scale={0.75}
      position={[0, -1.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}/>
     
      </mesh>

  );
};





const ComputersCanvas = () => {
  return (
  
        <Canvas frameLoop="demand"
        shadows
        camera={{position: [20, 3, 5], fov: 25}}
        gl={{preserveDrawingBuffer: true}}
        >
    
    {/*Used as a fall back component. In this component loading percentage will be displayed when rendering the gltf  */}
    <Suspense fallback={<CanvasLoader/>} >

    {/* enableZoom is used so users can't zoom in or out of the gltf scene.*/}
    <OrbitControls enableZoom={false}

    // PolarAngle is used so users can't rotate the gltf scene freely.
    maxPoLarAngle={Math.PI / 2}
    minPoLarAngle={Math.PI / 2}
    />

    <Computers/>
    </Suspense>
    <Preload all />

    </Canvas>
  );
};

export default ComputersCanvas;
