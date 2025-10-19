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
    // Apply cursor styles to all elements
    const style = document.createElement('style');
    style.textContent = `
      * {
        cursor: url(${cursor}) 16 16, auto !important;
      }
      *:active {
        cursor: url(${cursor_red}) 16 16, auto !important;
      }
    `;
    document.head.appendChild(style);

    const handleMouseDown = (e) => {
      document.body.style.cursor = `url(${cursor_red}) 16 16, auto`;
      // Apply to all elements
      const allElements = document.querySelectorAll('*');
      allElements.forEach(el => {
        el.style.cursor = `url(${cursor_red}) 16 16, auto`;
      });
    };

    const handleMouseUp = (e) => {
      document.body.style.cursor = `url(${cursor}) 16 16, auto`;
      // Apply to all elements
      const allElements = document.querySelectorAll('*');
      allElements.forEach(el => {
        el.style.cursor = `url(${cursor}) 16 16, auto`;
      });
    };

    // Add event listeners
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // Cleanup function
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.head.removeChild(style);
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
