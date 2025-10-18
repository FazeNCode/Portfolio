import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Resume, Projects, StickyMusicPlayer} from './components'
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { cursor, cursor_red, maple_bg3 } from './assets';

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
   <div className="relative bg-primary">
    <div
      style={{
        backgroundImage: `url(${maple_bg3})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        backgroundSize: windowWidth >= 200 ? 'cover' : 'auto',
        minHeight: '100vh',
      }}
    >
      <Navbar/>
      <Hero/>
    </div>

    {/* <Canvas>
    <Cloud/>
    </Canvas> */}

    <About/>
    <Experience/>
    <Projects/>




    <Tech/>

    {/* <Works/>
    <Feedbacks/> */}

    <Resume/>

    <div className="relative z-0">
    <Contact/>
    </div>

  {/* Sticky Music Player */}
  <StickyMusicPlayer />

   </div>
   </BrowserRouter>
  
  )
}
export default App;
