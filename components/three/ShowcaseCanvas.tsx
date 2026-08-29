"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function AICore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.12;
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

function OrbitingRing({ radius, speed, color }: { radius: number; speed: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * speed;
    }
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 2.5, 0, 0]}>
      <torusGeometry args={[radius, 0.015, 8, 64]} />
      <meshBasicMaterial color={color} transparent opacity={0.6} />
    </mesh>
  );
}

function Scene({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = scrollProgress * Math.PI * 0.4;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.45} />
      <directionalLight position={[4, 4, 4]} intensity={1} />
      <pointLight position={[-3, 1, 2]} intensity={0.5} color="#6366f1" />
      <pointLight position={[3, -2, -2]} intensity={0.35} color="#22d3ee" />
      <AICore />
      <OrbitingRing radius={2.1} speed={0.25} color="#6366f1" />
      <OrbitingRing radius={2.6} speed={-0.18} color="#22d3ee" />
    </group>
  );
}

export default function ShowcaseCanvas({ scrollProgress }: { scrollProgress: number }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ width: "100%", height: "100%" }}
    >
      <Scene scrollProgress={scrollProgress} />
      <OrbitControls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.08} />
    </Canvas>
  );
}
