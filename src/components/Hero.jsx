// import {motion} from 'framer-motion';
// import {styles} from '../styles'
// import {ComputersCanvas, BirdCanvas, CloudCanvas, CloudPolyCanvas, SunCanvas, OrangeMushroomCanvas, StumpCanvas} from './canvas';


// const Hero = () => {
//   return (

   
//     // Semantic tag
//     <section className=' lg:relative lg:w-full lg:h-screen lg:x-auto'>

//       <div className=' mx-auto'> 
//       <BirdCanvas/>
//       </div>

//       <div className='flex justify-center'>
//         <OrangeMushroomCanvas />
//         <StumpCanvas />
//       </div>
      
// {/* The code below is for the scroll down animation */}
//     <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center '>
//       <a href="#about">
//       <div className='w-[35px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2' >
//         {/* Play around with this to your needs */}
//         <motion.div 
//         animate={{
//           y: [0, 24, 0]
//         }}
//         transition={{
//           duration: 1.5,
//           repeat: Infinity,
//           repeatType: 'loop'
//         }}
//         className="w-3 h-3 rounded-full bg-secondary mb-1 "
//         />
//        </div>
//       </a>
//     </div>
//     </section>
   
//   )
// }

// export default Hero;



import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import {
  BirdCanvas,
  OrangeMushroomCanvas,
  StumpCanvas,
  SlimeCanvas,
  HornyMushroomCanvas
} from "./canvas";

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
    className={`xl:relative xl:w-full xl:h-screen xl:mx-auto section-container  ${
      expanded ? "expanded" : ""
    }`}
    >
      <div className="mx-auto">
        <BirdCanvas />
      </div>

      <div className="flex justify-center">
  <div className="model-container">
    <OrangeMushroomCanvas />
  </div>
  <div className="model-container">
    <SlimeCanvas />
  </div>
  <div className="model-container">
    <StumpCanvas />
  </div>
  <div className="model-container">
    <HornyMushroomCanvas />
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
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;