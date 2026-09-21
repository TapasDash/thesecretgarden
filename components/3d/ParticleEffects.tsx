'use client'

import { useFrame, useThree } from '@react-three/fiber'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

export function ParticleEffects() {
  const dustParticlesRef = useRef<THREE.Points>(null)
  const neonSparksRef = useRef<THREE.Points>(null)

  // Dust particles following the spotlight
  const dustPositions = useMemo(() => {
    const positions = new Float32Array(50000 * 3)
    for (let i = 0; i < 50000 * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 40 // x
      positions[i + 1] = Math.random() * 15 // y
      positions[i + 2] = (Math.random() - 0.5) * 40 // z
    }
    return positions
  }, [])

  // Neon sparks around lights
  const sparkPositions = useMemo(() => {
    const positions = new Float32Array(1000 * 3)
    for (let i = 0; i < 1000 * 3; i += 3) {
      const angle = Math.random() * Math.PI * 2
      const radius = Math.random() * 15
      positions[i] = Math.cos(angle) * radius
      positions[i + 1] = Math.random() * 20
      positions[i + 2] = Math.sin(angle) * radius
    }
    return positions
  }, [])

  useFrame(() => {
    if (dustParticlesRef.current) {
      dustParticlesRef.current.rotation.y += 0.0001
      dustParticlesRef.current.position.z = Math.sin(Date.now() * 0.0001) * 2
    }
    
    if (neonSparksRef.current) {
      neonSparksRef.current.rotation.z += 0.002
      neonSparksRef.current.rotation.x = Math.sin(Date.now() * 0.0005) * 0.3
    }
  })

  return (
    <>
      {/* Dust Particles - volumetric effect */}
      <points ref={dustParticlesRef} position={[0, 8, -5]}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[dustPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.15}
          color="#F5F5F0"
          transparent={true}
          opacity={0.1}
          sizeAttenuation={true}
        />
      </points>

      {/* Neon Sparks - emanating from light sources */}
      <points ref={neonSparksRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[sparkPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.3}
          color="#D4AF37"
          transparent={true}
          opacity={0.4}
          sizeAttenuation={true}
        />
      </points>

      {/* Additional green sparks */}
      <points position={[8, 7, -5]}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[new Float32Array(500 * 3).map(() => (Math.random() - 0.5) * 20), 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.2}
          color="#4A7C59"
          transparent={true}
          opacity={0.3}
          sizeAttenuation={true}
        />
      </points>
    </>
  )
}
