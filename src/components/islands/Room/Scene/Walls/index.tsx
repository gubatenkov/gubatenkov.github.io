import type { ReactNode, FC } from 'react'

import { MeshBasicMaterial, Group, Mesh } from 'three'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import useMap from '@/utils/hooks/useMap'
import { useEffect, useRef } from 'react'

type Props = {
  children: ReactNode
}

const material = new MeshBasicMaterial()

const Room: FC<Props> = ({ children }) => {
  const ref = useRef<Group>(null)
  const map = useMap('/textures/4kBaked.jpg')
  const gltf = useGLTF('/models/room.glb', '/draco/')

  useFrame(() => {
    if (ref.current && ref.current.scale.x < 1) {
      ref.current.scale.x += 0.01
      ref.current.scale.y += 0.01
      ref.current.scale.z += 0.01
    }
  })

  useEffect(() => {
    material.map = map
    gltf.scene.traverse((child) => {
      if (child instanceof Mesh) {
        child.material = material
      }
    })
  }, [gltf.scene, material])

  return (
    <group ref={ref} scale={0}>
      <primitive object={gltf.scene} />
      {children}
    </group>
  )
}

export default Room
