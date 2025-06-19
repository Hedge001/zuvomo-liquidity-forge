
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AnimatedSphere = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color={color}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
};

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 opacity-30">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        
        <AnimatedSphere position={[-3, 2, -2]} color="#06b6d4" />
        <AnimatedSphere position={[3, -1, -1]} color="#0891b2" />
        <AnimatedSphere position={[0, 1, -3]} color="#67e8f9" />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
