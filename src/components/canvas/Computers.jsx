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

    <Canvas
      frameloop="demand"
       shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
       gl={{preserveDrawingBuffer: true}}
    >
      <mesh>
      <hemisphereLight intensity={1} groundColor="red" />
      <pointLight intensity={1} />
      <spotLight position={[-20, 50, 10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
      
       />
      <primitive object={computer.scene} 
      scale={0.75}
      position={[0, -1.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}/>
     
      </mesh>

  {/* SUSPENSE IS NOT WORKING, THIS IS TO ADD A LOADING PERCENTAGE WHEN LOADING SCENE */}
  {/* COME BACK AND FIX THIS!! VIDEO TIME 53:20 */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          // PolarAngle makes it so it rotates as specified 
          maxPoLarAngle={Math.PI / 2}
          minPoLarAngle={Math.PI / 2}
        />

     
      </Suspense>
      
    </Canvas>
  );
};





const ComputersCanvas = () => {
  return (
    <></>

    //     <Canvas frameLoop="demand"
    //     shadows
    //     camera={{position: [20, 3, 5], fov: 25}}
    //     gl={{preserveDrawingBuffer: true}}
    //     >

    // <Suspense fallback={<CanvasLoader/>} >

    // {/* enableZoom will make it so the user can't zoom in or out of the gltf scene that we render */}
    // <OrbitControls enableZoom={false}
    // // below is so the user can't rotate the gltf scene freely, only rotate it a certain way
    // maxPoLarAngle={Math.PI / 2}
    // minPoLarAngle={Math.PI / 2}
    // />

    // <Computers/>
    // </Suspense>
    // <Preload all />

    // </Canvas>
  );
};

export default Computers;
