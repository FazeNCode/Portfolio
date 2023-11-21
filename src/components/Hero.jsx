import { motion } from "framer-motion";
import { styles } from "../styles";
import {
  BirdCanvas,
  Stump,
  OrangeMushroom,
  Slime,
  HornyMushroom,
  Thief
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
    className={`relative w-full h-screen mx-auto  ${
      expanded ? "expanded" : ""
  }`}
    >
      <div className="mx-auto">
        {/* <BirdCanvas /> */}
      </div>

    {/* <div className="flex justify-center h-screen  mx-auto"> */}
    <div className=" justify-center  mx-auto">

<div className="h-screen">
<Canvas>
    <OrangeMushroom/>
    <HornyMushroom/>
    <Slime/>
    <Stump />

    </Canvas>
</div>
  
  
</div>

{/* CODE BELOW IS FOR THE HOVERING BALL TO SLIDE DOWN THE PAGE */}

      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
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
      </div> */}
    </section>
  );
};

export default Hero;
