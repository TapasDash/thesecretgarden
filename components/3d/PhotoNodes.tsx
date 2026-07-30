'use client'

import { useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

interface PhotoNode {
  id: string
  position: [number, number, number]
  image: string
  description: string
  scale: [number, number, number]
}

export function PhotoNodes() {
  const nodes: PhotoNode[] = [
    {
      id: 'node_community',
      position: [-3, 2, 4],
      image: '/images/community_moment.png',
      description: 'The hostel family relaxing, safe and warm under string lights.',
      scale: [2, 1.5, 0.1],
    },
    {
      id: 'node_cafe_activity',
      position: [6, 2, 0],
      image: '/images/motorcycle_detail.png',
      description: 'Custom vintage motorcycle - a symbol of freedom and adventure.',
      scale: [2, 1.5, 0.1],
    },
  ]

  return (
    <group>
      {nodes.map((node) => (
        <PhotoNode key={node.id} node={node} />
      ))}
    </group>
  )
}

function PhotoNode({ node }: { node: PhotoNode }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [isHovered, setIsHovered] = useState(false)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
      meshRef.current.scale.set(
        node.scale[0] * (isHovered ? 1.1 : 1),
        node.scale[1] * (isHovered ? 1.1 : 1),
        node.scale[2]
      )
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={node.position}
      onClick={() => console.log('Clicked:', node.id)}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <planeGeometry args={[node.scale[0], node.scale[1]]} />
      <meshStandardMaterial
        color="#F5F5F0"
        emissive={isHovered ? '#D4AF37' : '#000000'}
        emissiveIntensity={isHovered ? 0.5 : 0}
      />
    </mesh>
  )
}
