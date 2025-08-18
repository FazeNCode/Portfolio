import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations, OrbitControls} from '@react-three/drei';
import { useCharacterAnimations } from './useCharacterAnimations';
// import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const MushroomHouse = () => {
  const group = useRef();
  const { nodes, animations } = useGLTF('./mushroomhouse_scene/mushroomhouse.glb');
  const { setAnimations, animationIndex } = useCharacterAnimations();
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    setAnimations(names);
  }, [names]);

  useEffect(() => {
    console.log("Names:", names);
    // Reset all animations
    animations.forEach((clip) => {
      const action = actions[clip.name];
      action.reset();
      action.setEffectiveWeight(1); // Set the weight for each animation
      action.fadeIn(1).play(); // Fade in and play each animation
    });

    return () => {
      // Fade out all animations
      animations.forEach((clip) => {  
        const action = actions[clip.name];
        action.fadeOut(0.5);
      });
    };
  }, [actions, animations, animationIndex]);



// ORIGINAL CODE
    //   <group ref={group} dispose={null} scale={[3, 3, 1.6]} >
  //  <primitive object={nodes.Scene} scale={2.5} position={[5, -3.5, -60]} rotation={[-0.05, -0.2, 0]} />


  return (
    <group ref={group} dispose={null} scale={[3, 3, 1.6]} >
   <primitive object={nodes.Scene} scale={2} position={[2, -3.5, -60]} rotation={[-0.05, -0.2, 0]} />


   
      <ambientLight intensity={0.6} />
      <hemisphereLight intensity={0.8} groundColor="#444444" />
      <directionalLight position={[-5, 5, -5]} castShadow intensity={0.8} />
      <pointLight intensity={0.3} />
      <spotLight position={[100, 100, -100]} angle={0.7} penumbra={1} intensity={0.5} castShadow shadow-mapSize={1024} />

      <OrbitControls
        enableRotate={false}
        enableZoom={false}
        enablePan={false}
        enableDamping={false}
        dampingFactor={0.25}
        autoRotate={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        position={[10, 30, 0]}
    
      />
    </group>
  );
};
export default MushroomHouse;







// CODE BELOW IS FOR THE SMOKE EFFECT FOR CHIMNEY 


// import React, { useRef, useEffect } from 'react';
// import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei';
// import { useCharacterAnimations } from './useCharacterAnimations';
// import { useFrame, useThree } from '@react-three/fiber';
// import { FogExp2 } from 'three'; // Import FogExp2 for exponential fog
// import * as THREE from 'three';

// const SmokeParticles = () => {
//   const { scene } = useThree();

//   // Create particle system for smoke
//   const smokeParticles = new Array(1000).fill().map(() => {
//     const particle = new THREE.Sprite(new THREE.SpriteMaterial({ color: 0x888888, opacity: 0.2 }));
//     particle.position.set(
//       Math.random() * 40 - 20,
//       Math.random() * 60,
//       Math.random() * 40 - 20
//     );
//     particle.scale.set(2, 2, 2);
//     scene.add(particle);
//     return particle;
//   });

//   // Animate the smoke particles
//   useFrame(() => {
//     smokeParticles.forEach((particle) => {
//       particle.position.y += 0.02;
//       if (particle.position.y > 60) particle.position.y = 0;
//     });
//   });

//   return null;
// };

// const MushroomHouse = () => {
//   const group = useRef();
//   const { nodes, animations } = useGLTF('./mushroomhouse_scene/mushroomhouse.glb');
//   const { setAnimations, animationIndex } = useCharacterAnimations();
//   const { actions, names } = useAnimations(animations, group);

//   useEffect(() => {
//     setAnimations(names);
//   }, [names]);

//   useEffect(() => {
//     // Reset and fade out animations
//     animations.forEach((clip) => {
//       const action = actions[clip.name];
//       action.reset().setEffectiveWeight(1).fadeIn(1).play();
//     });

//     return () => {
//       animations.forEach((clip) => actions[clip.name].fadeOut(0.5));
//     };
//   }, [actions, animations, animationIndex]);

//   return (
//     <group ref={group} dispose={null} scale={[3, 3, 1.6]} >
//       {/* Add FogExp2 for exponential fog */}
//       <fogExp2 attach="fog" args={[0xaaaaaa, 0.015]} />

//       {/* Add SmokeParticles component for particle system */}
//       <SmokeParticles />

//       {/* Your existing code for MushroomHouse */}
//       <primitive object={nodes.Scene} scale={2} position={[2, -3.5, -60]} rotation={[-0.05, -0.2, 0]} />

//       {/* Lights and controls... */}
//       <ambientLight />
//       <hemisphereLight intensity={0} groundColor="black" />
//       <directionalLight position={[-5, 5, -5]} castShadow intensity={0.4} />
//       <pointLight intensity={-0.5} />
//       <spotLight position={[100, 100, -100]} angle={0.7} penumbra={1} intensity={0.5} castShadow shadow-mapSize={1024} />

//       <OrbitControls
//         enableRotate={false}
//         enableZoom={false}
//         enablePan={false}
//         enableDamping={false}
//         dampingFactor={0.25}
//         autoRotate={false}
//         maxPolarAngle={Math.PI / 2}
//         minPolarAngle={Math.PI / 2}
//         position={[10, 30, 0]}
//       />
//     </group>
//   );
// };

// export default MushroomHouse;
