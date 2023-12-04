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
import { Bird, Stump, OrangeMushroom, Slime, HornyMushroom, Thief, MushroomHouse, MapleModels } from "./canvas";
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
    <div className=" absolute top-20 left-1/2 transform -translate-x-1/2 w-full ">
      {/* sm:w-3/4 md:w-3/4 lg:w-1/2 xl:w-1/3 overflow-visible  */}
        <Canvas className="">
          <Bird />
        </Canvas>
      </div>


      <div className="absolute left-1/2 transform bottom-[-4.6em] -translate-x-1/2 w-full h-[20em] sm:h-[27em] sm:bottom-[-6.7em] md:h-[35em] md:bottom-[-9.2em] ">
<Canvas>
  <MushroomHouse/>
  </Canvas>
</div>


{/* <div className="absolute left-1/2 transform bottom-[-2.6em] -translate-x-1/2 w-full h-[20em] sm:h-[27em] sm:bottom-[-6.7em] md:h-[35em] md:bottom-[-9.2em] ">
<Canvas>
  <MapleModels/>
  </Canvas>
</div> */}

{/* 
  <div className=" h-60 absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full ">
  <Canvas className="">
    <OrangeMushroom />
    <HornyMushroom />
    <Slime />
    <Stump />
  </Canvas>
</div> */}





{/* ORIGINAL CODE BEFORE HEIGHT AND WIDTH ADJUST FOR AUTO SCALING */}
{/* <div className=" h-[20em] absolute bottom-[-4.4em] left-1/2 transform -translate-x-1/2 w-full sm:w-3/4 md:w-2/4 lg:w-1/2 xl:w-1/3"> */}





    </section>
  );
};

export default Hero;