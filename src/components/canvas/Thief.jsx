import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useCharacterAnimations } from "./useCharacterAnimations";
import { OrbitControls, Preload } from "@react-three/drei";

const Thief = () => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "./maplethief_scene/thief_idle.glb",
 
  );
  const { setAnimations, animationIndex } = useCharacterAnimations();
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    setAnimations(names);
  }, [names]);

  useEffect(() => {
    console.log("Names:", names);
    actions[names[animationIndex]].reset().fadeIn(0.5).play("Idle");
    return () => {
      // actions[names[animationIndex]].fadeOut(0.5);
    };
  }, [actions, animationIndex]);



  return (
    // <group ref={group} dispose={null} scale={[2.2, 2.2, 2.2]}>
    <group ref={group} dispose={null} scale={[75, 65, 75 ]}>
      <primitive object={nodes.Scene} />
   
      <hemisphereLight intensity={1} groundColor="yellow" />
      <directionalLight position={[0, 0, 0]} castShadow intensity={1} />
      <pointLight intensity={0.4} />
      <spotLight
        position={[0, -40, -40]}
        angle={0.7}
        penumbra={0.1}
        intensity={0.1}
        castShadow
        shadow-mapSize={1024}
      />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping={true}
        dampingFactor={0.25}
        autoRotate={false}
        maxPolarAngle={Math.PI / 2.5}
        minPolarAngle={Math.PI / 2.5}
        position={[-0, 0, 0]} // Adjust the camera position here
      />

<mesh>
  {/* Have not yet utilized mesh, WILL DO IN THE FUTURE! */}
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
