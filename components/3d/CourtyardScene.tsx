'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'
import { CourtyardEnvironment } from './CourtyardEnvironment'
import { Lighting } from './Lighting'
import { ParticleEffects } from './ParticleEffects'
import { PhotoNodes } from './PhotoNodes'

export function CourtyardScene() {
  return (
    <Canvas
      camera={{ position: [0, 8, 12], fov: 50 }}
      style={{ width: '100%', height: '100vh' }}
    >
      <PerspectiveCamera makeDefault position={[0, 8, 12]} fov={50} />
      <Suspense fallback={null}>
        <Lighting />
        <CourtyardEnvironment />
        <ParticleEffects />
        <PhotoNodes />
        <OrbitControls 
          enableZoom={true}
          enablePan={true}
          autoRotate={false}
          minDistance={5}
          maxDistance={50}
        />
      </Suspense>
      <fog attach="fog" args={['#1B3320', 5, 80]} />
    </Canvas>
  )
}
