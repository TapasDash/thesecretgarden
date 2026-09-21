'use client'

import { useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useEffect, useRef } from 'react'

export function CourtyardEnvironment() {
  const floorRef = useRef<THREE.Mesh>(null)
  
  let floorTexture: THREE.Texture | null = null
  let cementTile: THREE.Texture | null = null

  try {
    const textureLoader = new THREE.TextureLoader()
    cementTile = textureLoader.load('/images/indochine_cement_tile.png')
    if (cementTile) {
      cementTile.repeat.set(10, 10)
      cementTile.wrapS = THREE.RepeatWrapping
      cementTile.wrapT = THREE.RepeatWrapping
    }
  } catch (e) {
    // Texture loading will fail in preview - use fallback
  }

  return (
    <>
      {/* Courtyard Floor - Vietnamese cement tiles */}
      <mesh ref={floorRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial
          color="#E8E8DF"
          map={cementTile}
          roughness={0.8}
          metalness={0}
        />
      </mesh>

      {/* Back Wall - with mural texture */}
      <mesh position={[0, 8, -15]} receiveShadow>
        <planeGeometry args={[30, 16]} />
        <meshStandardMaterial
          color="#3E2723"
          roughness={0.7}
          metalness={0}
        />
      </mesh>

      {/* Left Wall */}
      <mesh position={[-15, 8, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[30, 16]} />
        <meshStandardMaterial
          color="#4A3728"
          roughness={0.8}
          metalness={0}
        />
      </mesh>

      {/* Right Wall */}
      <mesh position={[15, 8, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[30, 16]} />
        <meshStandardMaterial
          color="#4A3728"
          roughness={0.8}
          metalness={0}
        />
      </mesh>

      {/* Banana Plant - positioned lower left */}
      <BananaPlant />

      {/* Neon Sign - green glow */}
      <NeonSign />

      {/* Motorcycle detail - lower right */}
      <MotorcycleProp />

      {/* Decorative Elements - Corrugated Metal Roofing accent */}
      <mesh position={[-8, 12, 5]} rotation={[Math.PI / 6, 0, 0]}>
        <boxGeometry args={[6, 0.5, 8]} />
        <meshStandardMaterial
          color="#565656"
          roughness={0.6}
          metalness={0.8}
        />
      </mesh>
    </>
  )
}

function BananaPlant() {
  return (
    <group position={[4, 0, -3]}>
      {/* Trunk */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.3, 0.5, 3, 8]} />
        <meshStandardMaterial color="#8B7355" roughness={0.7} />
      </mesh>

      {/* Large banana leaves - layered for fullness */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <mesh
          key={i}
          position={[Math.cos((i / 6) * Math.PI * 2) * 1.5, 2 + Math.random() * 1.5, Math.sin((i / 6) * Math.PI * 2) * 1.5]}
          rotation={[Math.PI / 4 + Math.random() * 0.5, (i / 6) * Math.PI * 2, Math.PI / 3]}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[1.2, 3, 0.2]} />
          <meshStandardMaterial color="#1B7D1B" roughness={0.4} />
        </mesh>
      ))}
    </group>
  )
}

function NeonSign() {
  return (
    <group position={[8, 7, -5]}>
      {/* Sign Box - black background */}
      <mesh>
        <boxGeometry args={[2, 0.8, 0.2]} />
        <meshStandardMaterial color="#000000" emissive="#000000" />
      </mesh>

      {/* Neon Green glow tube */}
      <mesh position={[0, 0, 0.15]}>
        <tubeGeometry args={[
          new THREE.CatmullRomCurve3([
            new THREE.Vector3(-0.8, 0.3, 0),
            new THREE.Vector3(-0.5, 0.3, 0),
            new THREE.Vector3(-0.3, -0.2, 0),
            new THREE.Vector3(0.3, -0.2, 0),
            new THREE.Vector3(0.5, 0.3, 0),
            new THREE.Vector3(0.8, 0.3, 0),
          ]),
          20,
          0.08,
          8,
        ]} />
        <meshStandardMaterial 
          color="#00FF00" 
          emissive="#00FF00"
          emissiveIntensity={2}
        />
      </mesh>
    </group>
  )
}

function MotorcycleProp() {
  return (
    <group position={[-6, 0, 1]} rotation={[0, Math.PI * 0.2, 0]}>
      {/* Motorcycle body - simplified */}
      <mesh castShadow>
        <boxGeometry args={[2, 1, 0.8]} />
        <meshStandardMaterial color="#CC0000" roughness={0.5} metalness={0.4} />
      </mesh>

      {/* Wheels */}
      {[0, 2].map((z) => (
        <mesh key={z} position={[0, 0.3, z - 1]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.5, 0.5, 0.3, 16]} />
          <meshStandardMaterial color="#000000" roughness={0.4} metalness={0.8} />
        </mesh>
      ))}

      {/* Seat */}
      <mesh position={[0, 0.8, 0]} castShadow>
        <boxGeometry args={[0.8, 0.4, 1.2]} />
        <meshStandardMaterial color="#333333" roughness={0.6} metalness={0.3} />
      </mesh>
    </group>
  )
}
