import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
// drei is a utility package for threejs, tools which can be used to enchance threejs
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import CanvasLoader from "../Loader";


const OrangeMushroom = () => {
const orangemushroom = useGLTF("./orangemushroom_scene/scene.gltf");
const { nodes, materials, animations} = useGLTF("./orangemushroom_scene/scene.gltf");

  const { actions } = useAnimations(animations);
  const animationToPlay = 'Walk';

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
    <hemisphereLight intensity={0.4} groundColor="black" />
    <pointLight intensity={1} />
    <spotLight position={[-60, 50, 10]}
    angle={1}
    penumbra={1}
    intensity={1}
    castShadow
    shadow-mapSize={1024} />
    <primitive 
    object={orangemushroom.scene} 
    scale= {10}
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
      <OrangeMushroom/>
      </Suspense>
      <Preload all />
  
      </Canvas>
      </div>
    );
  };
  export default OrangeMushroomCanvas;
  





// import { Suspense, useEffect, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import CanvasLoader from "../Loader";
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import * as THREE from 'three';

// const OrangeMushroom = () => {
//   const orangemushroom = useGLTF(
//     "./orangemushroom_scene/scene.gltf",
//     true  // Enable animations
//   );

//   const { nodes, materials, animations } = orangemushroom;

//   useEffect(() => {
//     if (animations.length > 0) {
//       const mixer = new THREE.AnimationMixer(orangemushroom.scene);

//       // Assuming 'Idle' is the correct animation clip name, replace it if necessary.
//       const idleAction = mixer.clipAction(animations[0]);

//       // Set the animation to loop.
//       idleAction.setLoop(THREE.LoopRepeat);
//       idleAction.play();

//       // Pass the mixer to useFrame for updating the animations.
//       useFrame((state, delta) => {
//         mixer.update(delta);
//       });
//     }
//   }, [animations]);

//   return (
//     <primitive object={orangemushroom.scene} />
//   );
// };

// const OrangeMushroomCanvas = () => {
//   return (
//     <Canvas frameloop="demand" shadows camera={{ position: [10, 0.2, 0.2], fov: 100 }} gl={{ preserveDrawingBuffer: true }}>
//       <Suspense fallback={<CanvasLoader/>}>
//         <OrbitControls
//           enableRotate={true}
//           autoRotateSpeed={0}
//           enableZoom={false}
//         />
//         <OrangeMushroom />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   );
// };

// export default OrangeMushroomCanvas;
