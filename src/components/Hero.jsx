// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import {Bird, Stump, OrangeMushroom, Slime, HornyMushroom, Thief} from "./canvas";
// import React, { useState, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

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
//     <section
//       className={`relative w-full h-screen m  ${
//         expanded ? "expanded" : ""
//       }`}
//     >
//         <div className=" h-[300px] mx-auto ">
//           <Canvas className="">
//             <Bird />
//           </Canvas>
//         </div>

//   <div className="h-30 absolute bottom-0 left-1/2 transform -translate-x-1/2">
//   <Canvas className="">
//     <OrangeMushroom />
//     <HornyMushroom />
//     <Slime />
//     <Stump />
//   </Canvas>
// </div>

//     </section>
//   );
// };
// export default Hero;


import { motion } from "framer-motion";
import { styles } from "../styles";
import { Bird, Stump, OrangeMushroom, Slime, HornyMushroom, Thief } from "./canvas";
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

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
    <section className={`relative w-full h-screen m ${expanded ? "expanded" : ""}`}>
      <div className="h-30 absolute top-40 left-1/2 transform -translate-x-1/2">
        <Canvas className="">
          <Bird />
        </Canvas>
      </div>

      <div className="h-30 absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <Canvas className="">
          <OrangeMushroom position={[-2, 0, 0]} />
          <HornyMushroom position={[0, 0, 0]} />
          <Slime position={[2, 0, 0]} />
          <Stump position={[4, 0, 0]} />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;