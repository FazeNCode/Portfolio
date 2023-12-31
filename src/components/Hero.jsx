// import { Bird, MushroomHouse, MapleModels, Thief } from "./canvas";
// import React, { useState, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";

// const Hero = () => {
//   const [expanded, setExpanded] = useState(false);
//   const [screenDimensions, setScreenDimensions] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   const updateScreenDimensions = () => {
//     setScreenDimensions({
//       width: window.innerWidth,
//       height: window.innerHeight,
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("resize", updateScreenDimensions);
//     return () => {
//       window.removeEventListener("resize", updateScreenDimensions);
//     };
//   }, []);

//   return (
//     <section className={`relative w-full h-screen ${expanded ? "expanded" : ""}`}>

//     <div className=" absolute top-20 left-1/2 transform -translate-x-1/2 w-full  ">
//         <Canvas className="">
//           <Bird />
//         </Canvas>
//       </div>



//  {/* <div className="absolute left-1/2 transform -translate-x-1/2 w-full
//        bottom-[-6.7em] h-[20em] sm:h-[30em] sm:bottom-[-10.9em] md:h-[35em] md:bottom-[-12.9em] lg:bottom-[-17.1em] lg:h-[45em] xl:bottom-[-21.2em] xl:h-[55em]  ">
//         <Canvas className="fixed">
//           <MushroomHouse/>
//         </Canvas>   
// </div>  */}



// <div className="absolute left-1/2 transform -translate-x-1/2 w-full
//        bottom-[-7.5em] h-[22em] sm:h-[30em] sm:bottom-[-10.2em] md:h-[35em] md:bottom-[-12.3em] lg:bottom-[-16.6em] lg:h-[45em] xl:bottom-[-20.7em] xl:h-[55em]  ">

        
//         {/* <Canvas className=" absolute bottom-[0.3em] h-[22em] sm:h-[30em] sm:bottom-[-0.6em] md:h-[35em] md:bottom-[-0.8em] lg:bottom-[-0.9em] lg:h-[45em] xl:bottom-[-1.35em] xl:h-[55em] "  */}

//         <Canvas 
        
//         //  dpr={[4, 4]}
//         camera={{
//           // fov: 100,
//           // position: [-2, 3, 10],
//         }}
//         >
//           <MushroomHouse screenDimensions={screenDimensions}/>
//         </Canvas>   
// </div> 



// {/* <div className="absolute-container w-full h-[18em] ">
//         <Canvas>
//           <MushroomHouse screenDimensions={screenDimensions} />
//         </Canvas>   
//       </div> */}




//     </section>
//   );
// };

// export default Hero;









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






{/* TAKE UT THE TRANSITION IF YOU WANT CHANGES QUICKER! */}
  
 {/* <div className=" transition-all duration-500 ease-in-out absolute left-1/2 transform -translate-x-1/2 w-full
       bottom-[-6.7em] h-[20em] sm:h-[30em] sm:bottom-[-10.5em] md:h-[35em] md:bottom-[-12.5em] lg:bottom-[-16.7em] lg:h-[45em] xl:bottom-[-21em] xl:h-[55em] 2xl:h-[59em] 2xl:bottom-[-22.6em] ">
        <Canvas className="absolute-container ">
          <MushroomHouse  />
        </Canvas>  
      </div>    */}


      <div className=" transition-all duration-500 ease-in-out absolute left-1/2 transform -translate-x-1/2 w-full
       bottom-[-8.7em] h-[25em] sm:h-[35em] sm:bottom-[-10.5em] md:h-[45em] md:bottom-[-12.5em] lg:bottom-[-16.7em] lg:h-[45em] xl:bottom-[-21em] xl:h-[55em] 2xl:h-[59em] 2xl:bottom-[-22.6em] ">
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
