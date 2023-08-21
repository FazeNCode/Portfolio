import { Suspense, useEffect, useState } from "react";

import { Canvas, useFrame } from "@react-three/fiber";

// drei is a utility package for threejs that contains various tools that can be used to enchance threejs
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { geometry } from "maath";

// Passing the isMobile variable as a prop 
const Computers = ( isMobile) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    // when using threejs with react, we must start with a mesh tag,

 

   
      <mesh>
      <hemisphereLight intensity={0.4} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight position={[-20, 50, 10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024} />
      
      <primitive 
      object={computer.scene} 
      // if it's mobile put scale to 0.7 :else: put scale to 0.75
      // The scale value changes how far or close the scene is being shown
      scale= {isMobile ? 0.7: 0.75 }
      // if it's mobile put position to a set of array :else: apply the second set of array.
      position={isMobile ? [-0, -3,  -2.2] : [0, -3.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}/>
      </mesh>
      

  );
};



const ComputersCanvas = () => {

  const [isMobile, setIsMobile ] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('max-with: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change',handleMediaQueryChange);

    return () =>{
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  
  }, [])
  
  return (
    <div className="h-[600px] bg-white">

    
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

{/* We are passing the isMobile variable to the scene for smaller screens  */}
    <Computers isMobile={isMobile}/>

    </Suspense>
    <Preload all />

    </Canvas>
    </div>
  );
};

export default ComputersCanvas;
