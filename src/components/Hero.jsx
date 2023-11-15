
import { motion } from "framer-motion";
import { styles } from "../styles";
import {
  BirdCanvas,
  StumpCanvas,
  OrangeMushroom,
  SlimeCanvas
} from "./canvas";

import React, { useState, useEffect} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import CanvasLoader from "../Loader";

const Hero = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleSection = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    window.addEventListener("resize", toggleSection);
    return () => {
      window.removeEventListener("resize", toggleSection);
    };
  }, []);

  return (
    <section
    className={`relative w-full h-screen mx-auto section-container ${
      expanded ? "expanded" : ""
  }`}
    >
      <div className="mx-auto">
        {/* <BirdCanvas /> */}
      </div>


    <div className="flex justify-center h-screen">

{/* REMOVE THE CANVAS IF IT"S CAUSING ISSUES! */}
<div className=" my-[450px] max-h-70">
<Canvas>
    <OrangeMushroom/>
    </Canvas>

</div>
  

  <div className="model-container">
    <SlimeCanvas />
  
  </div>
  <div className="model-container">
    <StumpCanvas />
  </div>
  <div className="model-container">
    {/* <HornyMushroom /> */}
  </div>
</div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1 "
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;



// import { motion } from "framer-motion";
// import React, { useState, useEffect} from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import {
//   BirdCanvas,
//   OrangeMushroomCanvas,
//   StumpCanvas,
//   SlimeCanvas,
//   HornyMushroomCanvas,
//   MapleThiefCanvas,
//   OrangeMushroomanim
// } from "./canvas";

// const Hero = () => {
//   const [expanded, setExpanded] = useState(false);

//   const toggleSection = () => {
//     setExpanded(!expanded);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", toggleSection);
//     return () => {
//       window.removeEventListener("resize", toggleSection);
//     };
//   }, []);

//   return (
//     <section className={`relative w-full h-screen mx-auto section-container  ${expanded ? "expanded" : ""}`}>
//       <Canvas>
//         <ambientLight />
//         <directionalLight position={[-5, 5, 5]} castShadow intensity={1} />
//         <pointLight intensity={2} />
//         <spotLight position={[-60, 90, 40]} angle={0.7} penumbra={1} intensity={2} castShadow shadow-mapSize={1024} />
        
//         <OrbitControls autoRotate={false} enableRotate={true} />
        
//         {/* <OrangeMushroomanim /> */}
//         {/* <SlimeCanvas />
//         <StumpCanvas />
//         <HornyMushroomCanvas /> */}
//       </Canvas>

//       <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
//         <a href="#about">
//           <div className="w-[35px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
//             <motion.div
//               animate={{
//                 y: [0, 24, 0]
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop"
//               }}
//               className="w-3 h-3 rounded-full bg-secondary mb-1"
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;
