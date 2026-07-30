'use client'

import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

export function Lighting() {
  const spotLightRef = useRef<THREE.SpotLight>(null)
  const neonMagentaRef = useRef<THREE.PointLight>(null)
  const neonGreenRef = useRef<THREE.PointLight>(null)

  useFrame(() => {
    // Animate neon lights with pulsing glow
    if (neonMagentaRef.current) {
      neonMagentaRef.current.intensity = 1.5 + Math.sin(Date.now() * 0.005) * 0.5
    }
    if (neonGreenRef.current) {
      neonGreenRef.current.intensity = 1.2 + Math.cos(Date.now() * 0.004) * 0.4
    }
  })

  return (
    <>
      {/* Ambient light - base illumination */}
      <ambientLight intensity={0.3} color="#D4A373" />

      {/* Projector beam - volumetric spotlight */}
      <spotLight
        ref={spotLightRef}
        position={[0, 15, -10]}
        angle={Math.PI / 4}
        penumbra={0.5}
        intensity={2}
        color="#D4A373"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Neon Magenta accent light */}
      <pointLight
        ref={neonMagentaRef}
        position={[-5, 8, 0]}
        intensity={1.5}
        color="#FF00FF"
        distance={30}
      />

      {/* Neon Green accent light */}
      <pointLight
        ref={neonGreenRef}
        position={[8, 7, -5]}
        intensity={1.2}
        color="#00FF00"
        distance={25}
      />

      {/* Warm pooled light from below */}
      <pointLight
        position={[3, 2, 4]}
        intensity={1}
        color="#FFE5B4"
        distance={20}
      />

      {/* Directional moonlight */}
      <directionalLight
        position={[-10, 20, 10]}
        intensity={0.4}
        color="#E8E8DF"
        castShadow
      />
    </>
  )
}
