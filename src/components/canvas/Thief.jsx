import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useFBX, useAnimations, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import * as THREE from 'three';


const MapleThief = () => {
//   const maplethief = useFBX("./maplethief_scene/scene.fbx"); 
// const maplethief = useGLTF("./maplethief_scene/scene2.glb"); 

const maplethief = useGLTF("./maplethief_scene/dancethiefs.glb"); 
const {nodes, material, animations} = useGLTF("./maplethief_scene/dancethiefs.glb");

 const {actions} = useAnimations(animations);

  const animationToPlay = 'dancing';


  useEffect(() => {
    console.log(animations); // Log available actions
    const clip = actions[animationToPlay]; // Use animationToPlay to access the desired animation
    if (clip) {
      clip.timeScale = 6.349; // You can set it to any value you like
      clip.reset(0);
      clip.play(0);
    }
  }, [actions, animationToPlay]);

return (
  <group>
    <primitive object={maplethief.scene} />
  </group>
);
};

const MapleThiefCanvas = () => {
  return (
    <div className="h-screen ">
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [10, 0.2, 0.2], fov: 30 }}
        gl={{ preserveDrawingBuffer: true }}
      >
      
        <hemisphereLight intensity={0} groundColor="black" />
        <pointLight intensity={0.4} />
        <spotLight
        position={[-60, 90, 40]}
        angle={0.7}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate={false}
            enableRotate={true}
          />
          <MapleThief />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};
export default MapleThiefCanvas;














//   return (
//     <mesh>
//       <hemisphereLight intensity={0.2} groundColor="black" />
//       <pointLight intensity={0.4} />
//       <spotLight
//         position={[-60, 90, 40]}
//         angle={0.7}
//         penumbra={1}
//         intensity={2}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <primitive
//         object={maplethief.scene}
//         // Use this value with fbx file type   object={maplethief}
//         scale={30}
//         // Use this value with fbx file type   scale={.5}
//         position={[-60, -20, -9]}
//         rotation={[0, 1.5, 0]}
//       />
//     </mesh>
//   );
// };