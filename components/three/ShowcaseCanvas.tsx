"use client";

import { useRef, useMemo, createContext, useContext } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Line } from "@react-three/drei";
import * as THREE from "three";
import { LLM_LAYERS, LAYER_Y } from "@/data/llmLayers";

const PulseCtx = createContext<React.MutableRefObject<Float32Array> | null>(null);

function LayerRing({ index, color, spread }: { index: number; color: string; spread: number }) {
  const ref = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const pulses = useContext(PulseCtx);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.position.y = LAYER_Y[index] * spread;
    ref.current.rotation.y = t * 0.15 * (index % 2 === 0 ? 1 : -0.7);
    if (innerRef.current && pulses) {
      const pulse = pulses.current[index] ?? 0;
      const scale = 1 + Math.sin(t * 2.5 + index) * 0.04 + pulse * 0.15;
      innerRef.current.scale.setScalar(scale);
      const mat = innerRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.45 + pulse * 0.45;
    }
  });

  return (
    <group ref={ref}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.55, 0.95, 48]} />
        <meshBasicMaterial color={color} transparent opacity={0.22} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={innerRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.62, 0.68, 48]} />
        <meshBasicMaterial color={color} transparent opacity={0.5} side={THREE.DoubleSide} />
      </mesh>
      {[0, 1, 2, 3].map((n) => {
        const angle = (n / 4) * Math.PI * 2;
        return (
          <mesh key={n} position={[Math.cos(angle) * 0.76, 0, Math.sin(angle) * 0.76]}>
            <sphereGeometry args={[0.035, 8, 8]} />
            <meshBasicMaterial color={color} />
          </mesh>
        );
      })}
    </group>
  );
}

function TransformerCore() {
  const groupRef = useRef<THREE.Group>(null);
  const blocksRef = useRef<THREE.Group>(null);

  const blockPositions = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        return [Math.cos(angle) * 0.32, (i - 2.5) * 0.08, Math.sin(angle) * 0.32] as [number, number, number];
      }),
    []
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) groupRef.current.rotation.y = t * 0.25;
    if (blocksRef.current) blocksRef.current.rotation.x = Math.sin(t * 0.4) * 0.08;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[0.28, 1]} />
        <meshStandardMaterial
          color="#00e5ff"
          emissive="#00e5ff"
          emissiveIntensity={0.6}
          roughness={0.15}
          metalness={0.9}
          transparent
          opacity={0.92}
        />
      </mesh>
      <group ref={blocksRef}>
        {blockPositions.map((pos, i) => (
          <mesh key={i} position={pos}>
            <boxGeometry args={[0.12, 0.12, 0.12]} />
            <meshStandardMaterial
              color="#7c6fff"
              emissive="#7c6fff"
              emissiveIntensity={0.35}
              roughness={0.2}
              metalness={0.85}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}

function DataStream({
  spread,
  onLayerHit,
  pulses,
}: {
  spread: number;
  onLayerHit: (i: number) => void;
  pulses: React.MutableRefObject<Float32Array>;
}) {
  const count = 40;
  const ref = useRef<THREE.Points>(null);
  const progress = useRef(
    (() => {
      const a = new Float32Array(count);
      for (let i = 0; i < count; i++) a[i] = Math.random();
      return a;
    })()
  );
  const lastHit = useRef(new Int16Array(count).fill(-1));

  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 0.35;
      p[i * 3 + 1] = LAYER_Y[0] * spread;
      p[i * 3 + 2] = (Math.random() - 0.5) * 0.35;
    }
    return p;
  }, [count]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    const pos = ref.current.geometry.attributes.position.array as Float32Array;
    const minY = LAYER_Y[0] * spread - 0.3;
    const maxY = LAYER_Y[LLM_LAYERS.length - 1] * spread + 0.3;
    const range = maxY - minY;

    for (let i = 0; i < count; i++) {
      progress.current[i] += delta * (1.6 + (i % 4) * 0.15);
      if (progress.current[i] > 1) {
        progress.current[i] = 0;
        lastHit.current[i] = -1;
      }
      const y = minY + progress.current[i] * range;
      pos[i * 3 + 1] = y;

      for (let li = 0; li < LLM_LAYERS.length; li++) {
        const layerY = LAYER_Y[li] * spread;
        if (Math.abs(y - layerY) < 0.07 && lastHit.current[i] !== li) {
          lastHit.current[i] = li;
          pulses.current[li] = 1;
          onLayerHit(li);
        }
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.06} color="#00e5ff" transparent opacity={0.85} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function VerticalBeam({ spread }: { spread: number }) {
  const topY = LAYER_Y[LLM_LAYERS.length - 1] * spread + 0.25;
  const botY = LAYER_Y[0] * spread - 0.25;
  return (
    <Line
      points={[
        [0, botY, 0],
        [0, topY, 0],
      ]}
      color="#7c6fff"
      lineWidth={1}
      transparent
      opacity={0.2}
    />
  );
}

function Scene({
  scrollProgress,
  onActiveLayer,
  pulses,
}: {
  scrollProgress: number;
  onActiveLayer: (i: number) => void;
  pulses: React.MutableRefObject<Float32Array>;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const spread = 1 + scrollProgress * 0.35;

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = scrollProgress * Math.PI * 0.35;
    }
    for (let i = 0; i < pulses.current.length; i++) {
      pulses.current[i] = Math.max(0, pulses.current[i] - delta * 2.2);
    }
  });

  return (
    <PulseCtx.Provider value={pulses}>
      <group ref={groupRef}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[4, 6, 4]} intensity={0.9} />
        <pointLight position={[0, 0, 2]} intensity={0.8} color="#00e5ff" />
        <pointLight position={[-3, -2, 1]} intensity={0.4} color="#7c6fff" />
        <pointLight position={[3, 2, -1]} intensity={0.35} color="#00ff94" />

        <VerticalBeam spread={spread} />
        <TransformerCore />

        {LLM_LAYERS.map((layer, i) => (
          <LayerRing key={layer.id} index={i} color={layer.color} spread={spread} />
        ))}

        <DataStream spread={spread} onLayerHit={onActiveLayer} pulses={pulses} />
      </group>
    </PulseCtx.Provider>
  );
}

export default function ShowcaseCanvas({
  scrollProgress,
  onActiveLayer,
}: {
  scrollProgress: number;
  onActiveLayer?: (index: number) => void;
}) {
  const pulses = useRef(new Float32Array(LLM_LAYERS.length));

  return (
    <Canvas
      camera={{ position: [0, 0.2, 4.2], fov: 48 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ width: "100%", height: "100%" }}
    >
      <Scene scrollProgress={scrollProgress} onActiveLayer={onActiveLayer ?? (() => {})} pulses={pulses} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.06}
        rotateSpeed={0.7}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={(3 * Math.PI) / 4}
      />
    </Canvas>
  );
}
