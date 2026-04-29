import React from 'react';

import './Test.css';

const Test = () => {
  return (
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <model-viewer
        src="/stroller.glb"
        ar
        ar-modes="scene-viewer webxr quick-look"
        camera-controls
        tone-mapping="neutral"
        poster="/poster.webp"
        shadow-intensity="1"
        auto-rotate
        style={{ width: '100%', height: '100%' }}
      >
        
        <button className="Hotspot" slot="hotspot-1" data-position="-224.6345691981735m 325.71879161204254m -47.460747640969466m" data-normal="-0.9743797941944211m 0.20722744905455592m -0.0874116755586988m" data-visibility-attribute="visible">
          <div className="HotspotAnnotation">One-hand control</div>
        </button>

      
        <button className="Hotspot" slot="hotspot-2" data-position="-139.63910565918377m -200.68525618819325m -32.41201758743218m" data-normal="-0.9991967881561851m 0.026886310731282646m 0.029713714571303937m" data-visibility-attribute="visible">
          <div className="HotspotAnnotation">Storage Space</div>
        </button>

        
        <button className="Hotspot" slot="hotspot-3" data-position="58.13443728853281m -24.314799691984774m -29.57066512659439m" data-normal="-0.18831362640718854m -0.7563935846242412m 0.6264237569318909m" data-visibility-attribute="visible">
          <div className="HotspotAnnotation">Safety build & lock</div>
        </button>

        
        <button className="Hotspot" slot="hotspot-4" data-position="45.48451147706601m -369.5423061950451m 362.5531323124076m" data-normal="0.9999578778201753m 4.011995536492871e-10m 0.009178375965904057m" data-visibility-attribute="visible">
          <div className="HotspotAnnotation">360° swivel wheels</div>
        </button>

        <button slot="ar-button" id="ar-button" style={arButtonStyle}>
            View in your space
        </button>
      </model-viewer>
    </div>
  );
};

const arButtonStyle = {
  backgroundColor: '#AD335A', 
  color: 'white',
  borderRadius: '20px',
  border: 'none',
  padding: '10px 20px',
  position: 'absolute',
  bottom: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  cursor: 'pointer'
};

export default Test;



// import React from 'react';

// const Test = () => {
//   return (
//     <div style={{ width: '100%', height: '500px', backgroundColor: '#f0f0f0' }}>
//       <model-viewer
//         src="/stroller.glb" // This looks for the file in your 'public' folder
//         alt="A 3D model of a stroller"
//         camera-controls
//         auto-rotate
//         shadow-intensity="2"
//         ar
//         style={{ width: '100%', height: '100%' }}
//       >
//       </model-viewer>
//     </div>
//   );
// };

// export default Test;















// import React from 'react';
// import '@google/model-viewer'; 

// import D from '../public/stroller.glb';


// const Test = () => {
//   return (
    // <div style={{ width: '100%', height: '500px' }}>
      {/* <model-viewer */}
        // src={D}
        // ios-src="../../shared-assets/models/Astronaut.usdz"

        // src="/stroller.glb"
        // ar
        // ar-scale="fixed"
        // camera-controls
        // touch-action="pan-y"
        // alt="A 3D model of an astronaut"
        // shadow-intensity="2"
        // skybox-image="../../shared-assets/environments/spruit_sunrise_1k_HDR.jpg"
        // skybox-height="2m"
        // max-camera-orbit="auto 90deg auto"
        // xr-environment
//         style={{ width: '100%', height: '100%' }}
//       >
//       </model-viewer>
//     </div>
//   );
// };

// export default Test;



