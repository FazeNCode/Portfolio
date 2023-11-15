import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, Thief, OrangeMushroom} from './components'
import { Canvas } from "@react-three/fiber";



const App = () => {
  return (
   <BrowserRouter>

   <div className="relative bg-primary    ">
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
    {/* <MapleThiefCanvas/> */}

<div className="h-[600px]">
<Canvas>
    <Thief/>
    </Canvas>
  
</div>
    

    <Contact/>
    </div>
   </div>
   </BrowserRouter>
  
  )
}

export default App;
