import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, Thief, OrangeMushroom} from './components'
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";

const App = () => {

  // useEffect(() => {
  //   const handleClick = () => {
  //     document.body.style.cursor = 'url(../assets/cursor_red.png), auto';
  //   };
  //   document.addEventListener('click', handleClick);

  //   return () => {
  //     document.removeEventListener('click', handleClick);
  //   };
  // }, []);



  useEffect(() => {
    const handleClick = () => {
      const body = document.querySelector("body");
      if (body) {
        body.style.cursor = "url(/src/assets/cursor_red.png), auto";
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  
  return (
   <BrowserRouter>
   <div className="relative bg-primary   ">
    <div className=" bg-hero-pattern  ">
    {/* bg-hero-pattern */}
      <Navbar/>
      <Hero/>

    </div>
    <About/>
    <Experience/>
    <Tech/>
  
    {/* <Works/>
    <Feedbacks/> */}
    <div className="relative z-0">
 
{/* <div className=" h-[600px]">
<Canvas>
    <Thief/>
    </Canvas>
</div> */}

    <Contact/>
    </div>
   </div>
   </BrowserRouter>
  
  )
}
export default App;
