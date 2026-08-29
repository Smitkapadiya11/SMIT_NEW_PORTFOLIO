"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function AICore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.18;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.4, 1.4, 1.4]} />
      <meshStandardMaterial
        color="#6366f1"
        emissive="#4338ca"
        emissiveIntensity={0.4}
        roughness={0.2}
        metalness={0.85}
      />
    </mesh>
  );
}

export default function ShowcaseCanvas({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = scrollProgress * Math.PI * 0.4;
    }
  });

  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 42 }}
      dpr={[1, 1.25]}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      style={{ width: "100%", height: "100%" }}
    >
      <group ref={groupRef}>
        <ambientLight intensity={0.45} />
        <directionalLight position={[4, 4, 4]} intensity={1} />
        <pointLight position={[-3, 1, 2]} intensity={0.5} color="#6366f1" />
        <AICore />
      </group>
      <OrbitControls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.08} />
    </Canvas>
  );
}
