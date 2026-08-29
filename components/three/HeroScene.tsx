"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus } from "@react-three/drei";
import * as THREE from "three";

function NeuralCore({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = t * 0.15 + mouse.current.x * 0.3;
    groupRef.current.rotation.x = mouse.current.y * 0.2;
    if (innerRef.current) {
      innerRef.current.rotation.z = t * 0.4;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <Sphere ref={innerRef} args={[1.2, 64, 64]}>
          <MeshDistortMaterial
            color="#6366f1"
            emissive="#4338ca"
            emissiveIntensity={0.4}
            roughness={0.2}
            metalness={0.8}
            distort={0.35}
            speed={2}
          />
        </Sphere>
      </Float>

      <Torus args={[1.8, 0.03, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#22d3ee" emissive="#0891b2" emissiveIntensity={0.6} />
      </Torus>

      <Torus args={[2.2, 0.02, 16, 100]} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <meshStandardMaterial color="#818cf8" emissive="#6366f1" emissiveIntensity={0.3} transparent opacity={0.7} />
      </Torus>
    </group>
  );
}

function Particles({ count = 120 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#818cf8" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function Scene({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-3, 2, 4]} intensity={0.8} color="#6366f1" />
      <pointLight position={[3, -2, -4]} intensity={0.5} color="#22d3ee" />
      <NeuralCore mouse={mouse} />
      <Particles />
    </>
  );
}

export default function HeroScene() {
  const mouse = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mouse.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    mouse.current.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
  };

  return (
    <div className="absolute inset-0" onMouseMove={handleMouseMove}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene mouse={mouse} />
      </Canvas>
    </div>
  );
}
