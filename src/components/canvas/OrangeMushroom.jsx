import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
// drei is a utility package for threejs, tools which can be used to enchance threejs
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import CanvasLoader from "../Loader";


const OrangeMushroom = () => {
const orangemushroom = useGLTF("./orangemushroom_scene/scene.gltf");
const { animations} = useGLTF("./orangemushroom_scene/scene.gltf");

  const { actions } = useAnimations(animations);
  const animationToPlay = "walk";

  useEffect(() => {
    console.log(animations); // Log available actions
    const clip = actions[animationToPlay]; // Use animationToPlay to access the desired animation
    if (clip) {
      clip.timeScale = 1.0; // You can set it to any value you like
      clip.reset();
      clip.play();
    }
  }, [actions, animationToPlay]);


//   return (
//     <group>
//       <primitive object={nodes.Object_6}   />
//       {/* Add other nodes, materials, or components here */}
//     </group>
//   );
// };


  return (
    <mesh>
    <hemisphereLight intensity={0.4} groundColor="black" />
    <pointLight intensity={0.4} />
    <spotLight position={[-60, 90, 40]}
    angle={0.7}
    penumbra={1}
    intensity={2}
    castShadow
    shadow-mapSize={1024} />
    <primitive 
    object={orangemushroom.scene} 
    scale= {6.5}
    position={[-60, -20, -9]}
    rotation={[0, 1.5, 0]}  /> 
 
    </mesh>

);
};
 
const OrangeMushroomCanvas = () => {
    return (
      <div className="h-full">
          <Canvas frameloop="demand"
          shadows
          camera={{position: [10, 0.2, 0.2], fov: 70}}
          gl={{preserveDrawingBuffer: true}}
          >
      {/*Fall back component. In this component loading percentage will be displayed when rendering the gltf  */}
      <Suspense fallback={<CanvasLoader/>} >
  
 {/* enableZoom is set to flase so users can't zoom in or out on the 3d model.*/}
      <OrbitControls
      autoRotate={false}
      enableRotate={false}
      // autoRotateSpeed={0}
      // enableZoom={false}
      // PolarAngle is used so users can't rotate the gltf scene freely.
      // maxPoLarAngle={Math.PI / 1}
      // minPoLarAngle={Math.PI / 1}
      />
      <OrangeMushroom/>
      </Suspense>
      <Preload all />
  
      </Canvas>
      </div>
    );
  };
  export default OrangeMushroomCanvas;
  



