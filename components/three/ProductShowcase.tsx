"use client";

import { useRef, useState, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, RoundedBox, Html, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const CALLOUTS = [
  { position: [2.5, 1.2, 0] as [number, number, number], label: "LLM Integration", desc: "Multi-model AI pipelines" },
  { position: [-2.5, 0.5, 0.5] as [number, number, number], label: "Automation", desc: "End-to-end workflows" },
  { position: [0, -2, 1.5] as [number, number, number], label: "Real-time", desc: "Production deployments" },
];

function AICore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.3}>
      <RoundedBox ref={meshRef} args={[1.5, 1.5, 1.5]} radius={0.15} smoothness={4}>
        <MeshDistortMaterial
          color="#6366f1"
          emissive="#4338ca"
          emissiveIntensity={0.5}
          roughness={0.15}
          metalness={0.9}
          distort={0.25}
          speed={1.5}
        />
      </RoundedBox>
    </Float>
  );
}

function Callout({ position, label, desc, active }: { position: [number, number, number]; label: string; desc: string; active: boolean }) {
  return (
    <Html position={position} center distanceFactor={8} style={{ pointerEvents: "none" }}>
      <div
        className={`whitespace-nowrap rounded-lg border px-3 py-2 transition-all duration-500 ${
          active
            ? "border-accent/50 bg-surface/90 opacity-100 shadow-glow backdrop-blur-sm"
            : "border-border/30 bg-surface/60 opacity-60 backdrop-blur-sm"
        }`}
      >
        <p className="font-mono text-[10px] uppercase tracking-wider text-cyan">{label}</p>
        <p className="text-xs text-text-soft">{desc}</p>
      </div>
    </Html>
  );
}

function ShowcaseScene({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = scrollProgress * Math.PI * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[-4, 2, 3]} intensity={0.6} color="#6366f1" />
      <pointLight position={[4, -1, -2]} intensity={0.4} color="#22d3ee" />
      <AICore />
      {CALLOUTS.map((c, i) => (
        <Callout key={c.label} {...c} active={scrollProgress > i * 0.15} />
      ))}
    </group>
  );
}

export default function ProductShowcase() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="showcase"
      className="section-padding relative overflow-hidden"
      onMouseMove={() => {}}
    >
      <div className="container-max">
        <div className="mb-16 text-center" data-animate="fade-up">
          <p className="eyebrow mb-4">Interactive</p>
          <h2 className="heading-lg mb-4">See the system in motion</h2>
          <p className="body-md mx-auto max-w-xl">
            Drag to explore. Every layer represents a real capability — from LLM integration to production automation.
          </p>
        </div>

        <div
          className="relative mx-auto h-[400px] max-w-4xl overflow-hidden rounded-3xl border border-border bg-surface/50 md:h-[500px]"
          data-animate="scale"
          data-delay="200"
        >
          <Suspense
            fallback={
              <div className="flex h-full items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
              </div>
            }
          >
            <Canvas camera={{ position: [0, 0, 6], fov: 40 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
              <ShowcaseScene scrollProgress={scrollProgress} />
              <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 1.5} />
            </Canvas>
          </Suspense>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <p className="font-mono text-xs text-text-muted">Drag to rotate · Scroll to evolve</p>
          </div>
        </div>
      </div>
    </section>
  );
}
