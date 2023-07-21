import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

import { MeshBasicMaterial, AnimationAction, Mesh } from 'three'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useEffect, useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import useMap from '@/utils/hooks/useMap'

type GTLFResult = GLTF & {
  nodes: {
    Plane011: Mesh
    Legs002: Mesh
  }
}

const Chair = () => {
  const plane = useRef(null)
  const map = useMap('/textures/4kBaked.jpg')
  const { animations, nodes } = useGLTF(
    '/models/chair.glb',
    '/draco/'
  ) as GTLFResult
  const { mixer, clips } = useAnimations(animations, plane)
  const material = useMemo(() => new MeshBasicMaterial({ map }), [map])
  let action: AnimationAction

  useEffect(() => {
    action = mixer.clipAction(clips[0])
    action.play()
  }, [mixer])

  useFrame((state) => {
    mixer.setTime(state.clock.elapsedTime / 10)
  })

  return (
    <group dispose={null}>
      <group name="Scene">
        <mesh
          geometry={nodes.Legs002.geometry}
          position={[-0.47, 0.4, -1.01]}
          material={material}
          name="Legs002"
        />
        <mesh
          geometry={nodes.Plane011.geometry}
          position={[-0.51, 1.74, -0.95]}
          material={material}
          name="Plane011"
          ref={plane}
        />
      </group>
    </group>
  )
}

export default Chair
