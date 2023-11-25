import { motion } from "framer-motion";
import { styles } from "../styles";
import {
  Bird,
  Stump,
  OrangeMushroom,
  Slime,
  HornyMushroom,
  Thief,
} from "./canvas";

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
    <section
      className={`relative w-full h-screen m  ${
        expanded ? "expanded" : ""
      }`}
    >
      <div className="">

        <div className=" h-[500px] mx-auto ">
          <Canvas>
            <Bird />
          </Canvas>
        </div>

        <div className="h-[300px] mx-auto">
          <Canvas>
            <OrangeMushroom />
            <HornyMushroom />
            <Slime />
            <Stump />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Hero;
