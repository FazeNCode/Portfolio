// import { Suspense, useEffect, useState, useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Preload, useFBX, useAnimations, useGLTF } from "@react-three/drei";
// import CanvasLoader from "../Loader";
// import * as THREE from 'three';

// const MapleThief = () => {
// //   const maplethief = useFBX("./maplethief_scene/scene.fbx");
// // const maplethief = useGLTF("./maplethief_scene/scene2.glb");

// const maplethief = useGLTF("./maplethief_scene/dancethiefs.glb");
// const {nodes, material, animations} = useGLTF("./maplethief_scene/dancethiefs.glb");

//  const {actions} = useAnimations(animations);

//   const animationToPlay = 'Armature|mixamo.com|Layer0';

//   useEffect(() => {
//     console.log(animations); // Log available actions
//     const clip = actions[animationToPlay]; // Use animationToPlay to access the desired animation
//     // const clip = actions.find((clip)) => clip.name == "dancing"
//     if (clip) {
//       clip.timeScale = 6.349; // You can set it to any value you like
//       clip.reset(0);
//       clip.play(0);
//     }
//   }, [actions, animationToPlay]);

// return (
//   <group>
//     <primitive object={maplethief.scene} />
//   </group>
// );
// };

// const MapleThiefCanvas = () => {
//   return (
//     <div className="h-screen ">
//       <Canvas
//         frameloop="demand"
//         shadows
//         camera={{ position: [10, 0.2, 0.2], fov: 30 }}
//         gl={{ preserveDrawingBuffer: true }}
//       >

//         <hemisphereLight intensity={0} groundColor="black" />
//         <pointLight intensity={0.4} />
//         <spotLight
//         position={[-60, 90, 40]}
//         angle={0.7}
//         penumbra={1}
//         intensity={2}
//         castShadow
//         shadow-mapSize={1024}
//       />
//         <Suspense fallback={<CanvasLoader />}>
//           <OrbitControls
//             autoRotate={false}
//             enableRotate={true}
//           />
//           <MapleThief />
//         </Suspense>
//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };
// export default MapleThiefCanvas;

// CURRENT CODE THAT WORKS!!!!!!

// import React, { useEffect } from "react";
// import { Canvas, } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import CanvasLoader from "../Loader";
// import DanceThief from "./Dancethief";

// const MapleThiefCanvas = () => {
//   useEffect(() => {
//     // Additional logic related to character animations (if needed)
//   }, []);

//   return (

//     <div>
//       </div>

// <div className="">
//   <Canvas
//     frameloop="demand"
//     shadows
//     camera={{ position: [10, 0.2, 0.2], fov: 30 }}
//     gl={{ preserveDrawingBuffer: true }}
//   >
//     <ambientLight />
//     {/* <hemisphereLight intensity={1} groundColor="black" /> */}
//     <directionalLight position={[-10, 5, 5]} castShadow sintensity={1} />
//     <pointLight intensity={0.4} />
//     <spotLight
//       position={[-60, 90, 40]}
//       angle={0.7}
//       penumbra={1}
//       intensity={2}
//       castShadow
//       shadow-mapSize={1024}
//     />
//      <Suspense fallback={<CanvasLoader />}>
//     <OrbitControls autoRotate={false} enableRotate={true} />
//     <DanceThief OrbitControls autoRotate={true} enableRotate={true} />
//     </Suspense>
//     <Preload all />
//   </Canvas>
// </div>
//   );
// };

// export default MapleThiefCanvas;

// CURRENT CODE THAT WORKS!!!!!!




import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useCharacterAnimations } from "./useCharacterAnimations";
import { OrbitControls, Preload } from "@react-three/drei";

const Thief = () => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "./maplethief_scene/dancethiefs.glb",
    [
      "./maplethief_scene/textures/Beltetc_baseColor.png",
      "./maplethief_scene/textures/Body_baseColor.png",
      "./maplethief_scene/textures/Face_baseColor.png",
      // Add paths to all your textures here
    ]
  );
  const { setAnimations, animationIndex } = useCharacterAnimations();
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    setAnimations(names);
  }, [names]);

  useEffect(() => {
    console.log("Names:", names);
    actions[names[animationIndex]].reset().fadeIn(0.5).play();
    return () => {
      // actions[names[animationIndex]].fadeOut(0.5);
    };
  }, [actions, animationIndex]);

  return (
    <group ref={group} dispose={null} scale={[2.2, 2.2, 2.2]}>
      <primitive object={nodes.Scene} />
   
      <hemisphereLight intensity={0} groundColor="" />
      <directionalLight position={[0, 0, 0]} castShadow intensity={1} />
      <pointLight intensity={1} />
      <spotLight
        position={[-60, 90, 40]}
        angle={0.7}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping={true}
        dampingFactor={0.25}
        autoRotate={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        position={[-0, 0, 0]} // Adjust the camera position here
      />

<mesh>
{/* <ambientLight /> */}
      <hemisphereLight intensity={1} groundColor="" />
      <pointLight intensity={0.4} />
      <spotLight
        position={[-60, 90, 40]}
        angle={0.7}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
    </mesh>
      
    </group>
  );
};
export default Thief;








//   return (
    // <mesh>
    //   <hemisphereLight intensity={0.2} groundColor="black" />
    //   <pointLight intensity={0.4} />
    //   <spotLight
    //     position={[-60, 90, 40]}
    //     angle={0.7}
    //     penumbra={1}
    //     intensity={2}
    //     castShadow
    //     shadow-mapSize={1024}
    //   />
    //   <primitive
    //     object={maplethief.scene}
    //     // Use this value with fbx file type   object={maplethief}
    //     scale={30}
    //     // Use this value with fbx file type   scale={.5}
    //     position={[-60, -20, -9]}
    //     rotation={[0, 1.5, 0]}
    //   />
    // </mesh>
//   );
// };
