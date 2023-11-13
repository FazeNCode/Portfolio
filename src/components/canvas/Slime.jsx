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
  
