import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'

import CanvasLoader from '../Loader';



const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed = {1.75} rotationIntensity={1} floatIntensity={1}>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 0.05]}/>
      <mesh castShadow receiveShadow scale={3}>
         {/* Front transparent sphere */}
        <icosahedronGeometry args={[1, 5, 10]} />
        <meshStandardMaterial
        color="#fff8eb" 
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
        opacity={0.1}
        transparent={true}
       
   
     
        />
      

        <Decal 
        position={[0, 0, 1]}
        rotation={[ 2 * Math.PI, 0, 6.25]}
        flatShading
        map={decal} />

      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
   <Canvas  
   frameloop="demand"
   shadows
   gl={{preserveDrawingBuffer: true}}
    >
{/*Used as a fall back component. In this component loading percentage will be displayed when rendering the gltf  */}
<Suspense fallback={<CanvasLoader/>} >

{/* enableZoom is used so users can't zoom in or out of the gltf scene.*/}
<OrbitControls enableZoom={false}
/>

{/* We are passing the isMobile variable to the scene for smaller screens  */}
<Ball imgUrl={icon} />

</Suspense>
<Preload all />

</Canvas>
    
  )
}
export default BallCanvas