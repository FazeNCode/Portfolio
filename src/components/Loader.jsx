// import React from 'react'
// import { Html, useProgress } from '@react-three/drei'


// const Loader = () => {
//   const { progress } = useProgress();

//   return (
//     <Html>
//       <span className="canvas-loader"></span>
//       {/* <span className="canvas-load"></span> */}
      
//       <p
//       style={{
//         fontSize: 20,
//         color: '#f1f1f1',
//         fontWeight: 1000,
//         marginTop: 40,
//       }}>
//       {progress.toFixed(2)}% 
//        </p>
//     </Html>
//   )
// }

// export default Loader;









import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
        <div className="spinner"></div>
        <p className="loader-text">
          {progress.toFixed(2)}%
        </p>
 
    </Html>
  );
};

export default Loader;