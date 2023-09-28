import React, { Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function App() {
  const splineStyle = {
    width: '100%',     
    height: '100vh',   
    position: 'fixed',  
    top: 0,             
    left: 0
  };

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline
          scene="https://prod.spline.design/dpSlIJhn8s17rXm2/scene.splinecode"
          style={splineStyle}
        />
      </Suspense>
    </div>
  );
}
