
import { Bird, MushroomHouse } from "./canvas";
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";



const Hero = () => {
  const [expanded, setExpanded] = useState(false);
  const [screenDimensions, setScreenDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const updateScreenDimensions = () => {
    setScreenDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenDimensions);
    return () => {
      window.removeEventListener("resize", updateScreenDimensions);
    };
  }, []);

  return (
    <section className={`relative w-full h-screen ${expanded ? "expanded" : ""}`}>

    <div className=" absolute top-20 left-1/2 transform -translate-x-1/2 w-full h-full ">
        <Canvas className="">
          <Bird />
        </Canvas>
      </div>







{/*  Before altercation on JAN 7th 2024 */}
{/* <div className=" transition-all duration-500 ease-in-out absolute left-1/2 transform -translate-x-1/2 w-full
       bottom-[-8.7em] h-[25em] sm:h-[35em] sm:bottom-[-10.5em] md:h-[45em] md:bottom-[-12.5em] lg:bottom-[-16.7em] lg:h-[45em] xl:bottom-[-21em] xl:h-[55em] 2xl:h-[59em] 2xl:bottom-[-22.6em] ">
        <Canvas className="absolute-container ">
          <MushroomHouse  />
        </Canvas>   
      </div>   */}



      <div className=" transition-all  ease-in-out absolute left-1/2 transform -translate-x-1/2 w-full
       bottom-[-9.2em] h-[25em] sm:h-[40em] sm:bottom-[-15.8em] md:h-[50em] md:bottom-[-20.1em] lg:bottom-[-22.2em] lg:h-[55em] xl:bottom-[-24.2em] xl:h-[60em] 2xl:h-[65em] 2xl:bottom-[-26.1em] ">
        <Canvas className="absolute-container ">
          <MushroomHouse  />
        </Canvas>   
      </div>  






      {/* Empty div over-lapping MushroomHouse, allows the functionalty of scorll down from anywhere on mobile */}
       <div className="absolute  w-full h-full">
      </div>





    </section>
  );
};

export default Hero;
