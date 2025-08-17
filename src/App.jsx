import { BrowserRouter } from "react-router-dom"
<<<<<<< HEAD
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, End, Resume} from './components'
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { cursor, cursor_red } from './assets';

const App = () => {

  useEffect(() => {
    const body = document.querySelector("body");

    // Set default cursor
    if (body) {
      body.style.cursor = `url(${cursor}), auto`;
    }

    const handleMouseDown = () => {
      if (body) {
        body.style.cursor = `url(${cursor_red}), auto`;
      }
    };

    const handleMouseUp = () => {
      if (body) {
        body.style.cursor = `url(${cursor}), auto`;
      }
    };

    // Add event listeners
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // Cleanup function
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);
=======
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, End} from './components'
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";

const App = () => {

  //  GOTTA COME BACK TO THIS THE CURSOR NEEDS TO TURN RED WHEN CLICKING!!
  
  // useEffect(() => {
  //   const handleClick = () => {
  //     const body = document.querySelector("body");
  //     if (body) {
  //       body.style.cursor = "url(/src/assets/cursor_red.png), auto";
  //     }
  //   };
  //   document.addEventListener("click", handleClick);
  //   return () => {
  //     document.removeEventListener("click", handleClick);
  //   };
  // }, []);
>>>>>>> 9091d0d3febc560e3870c3cacadeec563c1d7648

  
  return (
   <BrowserRouter>
   <div className="relative bg-primary  ">
    <div className=" bg-hero-pattern  ">
      <Navbar/>
      <Hero/>
    </div>

    {/* <Canvas>
    <Cloud/>
    </Canvas> */}
   
    <About/>
    <Experience/>


  
  
    <Tech/>
  
    {/* <Works/>
    <Feedbacks/> */}
    <div className="relative z-0">
<<<<<<< HEAD

    <Contact/>
    </div>

    <Resume/>

=======
 
    <Contact/>
    </div>

  
>>>>>>> 9091d0d3febc560e3870c3cacadeec563c1d7648
  <div className="">
    <End/>
  </div>
  

    
    
   </div>
   </BrowserRouter>
  
  )
}
export default App;
