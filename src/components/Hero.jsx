import { Bird, MushroomHouse, MapleModels, Thief } from "./canvas";
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

    <div className=" absolute top-20 left-1/2 transform -translate-x-1/2 w-full  ">
        <Canvas className="">
          <Bird />
        </Canvas>
      </div>

<div className="">

<div className="absolute left-1/2 transform -translate-x-1/2 w-full
       bottom-[-6.7em] h-[20em] sm:h-[30em] sm:bottom-[-10.9em] md:h-[35em] md:bottom-[-12.9em] lg:bottom-[-17.1em] lg:h-[45em] xl:bottom-[-21.2em] xl:h-[55em]  ">
        <Canvas className="absolute-container">
          
          <MushroomHouse/>
        </Canvas>   
      </div>

</div>
      

      

       <div className="absolute left-1/2 transform bottom-[-3em] -translate-x-1/2 w-full h-[20em] sm:h-[27em] sm:bottom-[-6.7em] md:h-[35em] md:bottom-[-9.2em] ">
        <Canvas>
          {/* <MapleModels screenDimensions={screenDimensions} /> */}
        
        </Canvas>
      </div>


{/* <div className="absolute-container w-full h-[18em] ">
        <Canvas>
          <MushroomHouse screenDimensions={screenDimensions} />
        </Canvas>   
      </div> */}

      {/* <div className="absolute-container w-full h-[18em]  ">
      <Canvas>
          <MapleModels screenDimensions={screenDimensions} />
        </Canvas>
        </div> */}

     


    </section>
  );
};

export default Hero;




