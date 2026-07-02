import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import './index.css';

const PanoramaViewer = ({ image = "/panorama.jpg" }) => {
  const texture = React.useMemo(() => new THREE.TextureLoader().load(image), [image]);

  return (
    <div className="viewer-container">
      <Canvas camera={{ position: [0, 0, 0.1], fov: 75 }} style={{ width: '100%', height: '100%' }}>
        <mesh>
          <sphereGeometry args={[500, 60, 40]} />
          <meshBasicMaterial map={texture} side={THREE.BackSide} />
        </mesh>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
    </div>
  );
};
export default PanoramaViewer;
