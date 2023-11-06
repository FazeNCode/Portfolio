import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useFBX, useAnimations, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const MapleThief = () => {
//   const maplethief = useFBX("./maplethief_scene/scene.fbx"); 
const maplethief = useGLTF("./maplethief_scene/scene2.glb"); 
const { nodes, materials, animations } = maplethief; // Correct variable names


//   useEffect(() => {
//     if (maplethief.animations && maplethief.animations.length > 0) {
//       console.log("Available animations:", maplethief.animations);
//     } else {
//       console.log("No animations found in the model.");
//     }
//   }, [maplethief]);


const { actions, names } = useAnimations(animations);

const playAnimation = () => {
 console.log("Available animations:", maplethief.animations);
  const sitAction = actions["Armature|mixamo.com|Layer0"];
  if (sitAction) {
    sitAction.reset().fadeIn(1).play();
  }
};
useEffect(() => {
  playAnimation();
}, []); // The empty dependency array ensures it runs only once when the component mounts


  return (
    <mesh>
      <hemisphereLight intensity={0.2} groundColor="black" />
      <pointLight intensity={0.4} />
      <spotLight
        position={[-60, 90, 40]}
        angle={0.7}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={maplethief.scene}
        // Use this value with fbx file type   object={maplethief}
        scale={30}
        // Use this value with fbx file type   scale={.5}
        position={[-60, -20, -9]}
        rotation={[0, 1.5, 0]}
      />
    </mesh>
  );
};

const MapleThiefCanvas = () => {
  return (
    <div className="h-screen ">
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [10, 0.2, 0.2], fov: 80 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>

          <OrbitControls
            autoRotate={false}
            enableRotate={false}
          />
          <MapleThief />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default MapleThiefCanvas;
