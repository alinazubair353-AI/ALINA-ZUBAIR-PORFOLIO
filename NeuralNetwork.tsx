import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function Net({ count }: { count: number }) {
  const g = useRef<THREE.Group>(null)
  const { pos, lines, dust } = useMemo(() => {
    const p = new Float32Array(count * 3), seg: number[] = []
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count), th = Math.PI * (1 + Math.sqrt(5)) * i
      const r = 2 + ((i * 37) % 10) / 25
      p.set([r * Math.sin(phi) * Math.cos(th), r * Math.sin(phi) * Math.sin(th), r * Math.cos(phi)], i * 3)
    }
    for (let i = 0; i < count; i++) for (let j = i + 1; j < count; j++)
      if (Math.hypot(p[i*3]-p[j*3], p[i*3+1]-p[j*3+1], p[i*3+2]-p[j*3+2]) < 1.5)
        seg.push(p[i*3], p[i*3+1], p[i*3+2], p[j*3], p[j*3+1], p[j*3+2])
    const d = new Float32Array(count * 6)
    for (let i = 0; i < d.length; i++) d[i] = (Math.sin(i * 12.9898) * 43758.5453 % 1) * 7 - 3.5
    return { pos: p, lines: new Float32Array(seg), dust: d }
  }, [count])
  useFrame((s, dt) => {
    const m = g.current!
    m.rotation.y += dt * 0.12
    m.rotation.x += (s.pointer.y * 0.35 - m.rotation.x) * 0.04
    s.camera.position.x += (s.pointer.x * 0.7 - s.camera.position.x) * 0.03
    s.camera.lookAt(0, 0, 0)
  })
  return (
    <group ref={g}>
      <mesh><icosahedronGeometry args={[1.2, 2]} /><meshBasicMaterial color="#8b7cf6" wireframe transparent opacity={0.35} /></mesh>
      <mesh><sphereGeometry args={[0.55, 32, 32]} /><meshBasicMaterial color="#4fd1e8" transparent opacity={0.85} /></mesh>
      <points><bufferGeometry><bufferAttribute attach="attributes-position" array={pos} count={count} itemSize={3} /></bufferGeometry><pointsMaterial size={0.08} color="#4fd1e8" /></points>
      <points><bufferGeometry><bufferAttribute attach="attributes-position" array={dust} count={dust.length / 3} itemSize={3} /></bufferGeometry><pointsMaterial size={0.03} color="#9aa6c4" transparent opacity={0.6} /></points>
      <lineSegments><bufferGeometry><bufferAttribute attach="attributes-position" array={lines} count={lines.length / 3} itemSize={3} /></bufferGeometry><lineBasicMaterial color="#5b6bb5" transparent opacity={0.4} /></lineSegments>
    </group>
  )
}
export default function NeuralNetwork() {
  const count = window.innerWidth < 1024 ? 50 : 100
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 50 }} dpr={[1, 1.5]} gl={{ antialias: false, powerPreference: 'low-power' }} aria-hidden="true">
      <Net count={count} />
    </Canvas>
  )
}
