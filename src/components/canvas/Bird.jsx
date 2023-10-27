import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

// drei is a utility package for threejs which contains various tools that can be used to enchance threejs
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { geometry } from "maath";


const Bird = () => {
  
const birds = useGLTF("./birds_scene/scene.gltf");

// console.log("Animations", birds.animations);


  return (
    <mesh>
    <hemisphereLight intensity={0.4} groundColor="black" />
    <pointLight intensity={1} />
    <spotLight position={[-20, 50, 10]}
    angle={1}
    penumbra={1}
    intensity={1}
    castShadow
    shadow-mapSize={1024} />
    <primitive 
    object={birds.scene} 
    // if it's mobile put scale to 0.7 :else: put scale to 0.75
    // The scale value changes how far or close the scene is being shown
    scale= {14}
    // if it's mobile put position to a set of array :else: apply the second set of array.
    position={[-50, -4, 1.5]}
    rotation={[-0.01, -0.2, -0.1]}/>
    </mesh>

// scale= {isMobile ? 0.7: 0.75 }
// position={isMobile ? [-0, -3,  -2.2] : [0, -3.25, -1.5]}
// rotation={[-0.01, -0.2, -0.1]}/>
);
};
 

const BirdCanvas = () => {
    return (
      <div className="h-[500px] ">
          <Canvas frameloop="demand"
          shadows
          camera={{position: [10, 0.2, 0.2], fov: 70}}
          gl={{preserveDrawingBuffer: true}}
          >
      
   
      {/*Used as a fall back component. In this component loading percentage will be displayed when rendering the gltf  */}
      <Suspense fallback={<CanvasLoader/>} >
  
      {/* enableZoom is used so users can't zoom in or out of the gltf scene.*/}
      <OrbitControls
      // autoRotate={true}
      autoRotateSpeed={0.5}
      enableZoom={false}
      // PolarAngle is used so users can't rotate the gltf scene freely.
      maxPoLarAngle={Math.PI / 1}
      minPoLarAngle={Math.PI / 1}
      />
  
  {/* We are passing the isMobile variable to the scene for smaller screens  */}
      <Bird/>
      </Suspense>
      <Preload all />
  
      </Canvas>
      </div>
    );
  };
  export default BirdCanvas;
  


