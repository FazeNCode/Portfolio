import { BrowserRouter } from "react-router-dom"
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

    <Contact/>
    </div>

    <Resume/>

  <div className="">
    <End/>
  </div>
  

    
    
   </div>
   </BrowserRouter>
  
  )
}
export default App;
