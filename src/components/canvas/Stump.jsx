// import React, { useRef, useEffect } from 'react';
// import { useGLTF, useAnimations } from '@react-three/drei';
// import { useCharacterAnimations } from './useCharacterAnimations';
// import { OrbitControls, Preload } from "@react-three/drei";

// const Stump = () => {
//   const group = useRef();
//   const { nodes, materials, animations } = useGLTF('./stump_scene/stump_animation_test3.glb',

//   );
//   const { setAnimations, animationIndex } = useCharacterAnimations();
//   const { actions, names } = useAnimations(animations, group);

//   useEffect(() => {
//     setAnimations(names);
//   }, [names]);

//   useEffect(() => {

//     console.log("Names:", names);
//     actions[names[animationIndex]].reset().fadeIn(1).play('Idle');
//     return () => {
//       actions[names[animationIndex]].fadeOut(0.5);
//     };
//   }, [actions, animationIndex]);
  
//   return (
//     // <group ref={group} dispose={null} scale={[1, 1, 1]}>
//     //   <primitive object={nodes.Scene}
//     //    scale= {0.4}
//     //    position={[-0.4, -1.3, -0.001]} />


// <group ref={group} dispose={null} scale={[2, 2, 3]}>
//       <primitive object={nodes.Scene}
//        scale= {3.5}
//        position={[10, -4.3, -7]}
//        rotation={[-0.2, -0.7, 0]}  
//         />
      
//       <ambientLight />
//        <hemisphereLight intensity={0} groundColor="orange" />
//         <directionalLight position={[1, 1, 1]} castShadow intensity={1} />
//       <pointLight intensity={1} />
//      <spotLight
//           position={[-60, 90, 40]}
//           angle={0.7}
//           penumbra={1}
//           intensity={0.1}
//           castShadow
//           shadow-mapSize={1024}
//         />

// <OrbitControls
//         enableRotate={false}
//         enableZoom={false}
//         enablePan={false}
//         enableDamping={true}
//         dampingFactor={0.25}
//         autoRotate={false}
//         maxPolarAngle={Math.PI / 2.5}
//         minPolarAngle={Math.PI / 2.5}
//         position={[-20, 200, 60]} // Adjust the camera position here
//       />
//     </group>
//   );
// };

// export default Stump;



import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useCharacterAnimations } from './useCharacterAnimations';
import { OrbitControls, Preload } from "@react-three/drei";

const Stump = () => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('./stump_scene/stump_animation_test3.glb');
  const { setAnimations, animationIndex } = useCharacterAnimations();
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    setAnimations(names);
  }, [names]);

  useEffect(() => {
    actions[names[animationIndex]].reset().fadeIn(1).play('Idle');
    return () => {
      actions[names[animationIndex]].fadeOut(0.5);
    };
  }, [actions, animationIndex]);
  
  return (
    <group ref={group} dispose={null} scale={[1, 1, 1]}>
      <primitive object={nodes.Scene} scale={3.5} position={[10, -4.3, -7]} rotation={[-0.2, -0.7, 0]} />
      
      <ambientLight />
      <hemisphereLight intensity={0} groundColor="orange" />
      <directionalLight position={[1, 1, 1]} castShadow intensity={1} />
      <pointLight intensity={1} />
      <spotLight position={[-60, 90, 40]} angle={0.7} penumbra={1} intensity={0.1} castShadow shadow-mapSize={1024} />

      <OrbitControls
        enableRotate={false}
        enableZoom={false}
        enablePan={false}
        enableDamping={true}
        dampingFactor={0.25}
        autoRotate={false}
        maxPolarAngle={Math.PI / 2.5}
        minPolarAngle={Math.PI / 2.5}
        position={[-20, 200, 60]}
      />
    </group>
  );
};

export default Stump;
