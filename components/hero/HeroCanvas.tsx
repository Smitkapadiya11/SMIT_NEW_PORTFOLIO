"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";

function Particles() {
  const ref = useRef<THREE.Group>(null);

  const [positions1, positions2] = useMemo(() => {
    const p1 = new Float32Array(2500 * 3);
    const p2 = new Float32Array(400 * 3);
    for (let i = 0; i < 2500; i++) {
      p1[i * 3] = (Math.random() - 0.5) * 18;
      p1[i * 3 + 1] = (Math.random() - 0.5) * 18;
      p1[i * 3 + 2] = (Math.random() - 0.5) * 18;
    }
    for (let i = 0; i < 400; i++) {
      p2[i * 3] = (Math.random() - 0.5) * 22;
      p2[i * 3 + 1] = (Math.random() - 0.5) * 22;
      p2[i * 3 + 2] = (Math.random() - 0.5) * 22;
    }
    return [p1, p2];
  }, []);

  useFrame(({ clock, mouse }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.elapsedTime * 0.05 + mouse.x * 0.08;
    ref.current.rotation.x = clock.elapsedTime * 0.03 + mouse.y * 0.05;
  });

  return (
    <group ref={ref}>
      <Points positions={positions1} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#7c6fff"
          size={0.03}
          sizeAttenuation
          depthWrite={false}
          opacity={0.7}
        />
      </Points>
      <Points positions={positions2} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00e5ff"
          size={0.055}
          sizeAttenuation
          depthWrite={false}
          opacity={0.45}
        />
      </Points>
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 hidden md:block" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 7], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <Particles />
        </Suspense>
      </Canvas>
    </div>
  );
}
