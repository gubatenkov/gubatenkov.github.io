import {
  RawShaderMaterial,
  BufferGeometry,
  DoubleSide,
  GLSL3,
  Mesh,
} from 'three'
import fragmentShader from '@/utils/shaders/holeCore/shader.fragement.glsl'
import vertexShader from '@/utils/shaders/holeCore/shader.vertex.glsl'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

import Mask from './Mask'

const HoleCore = () => {
  const coreRef = useRef<Mesh<BufferGeometry, RawShaderMaterial>>(null)

  useFrame(({ camera }) => {
    const mesh = coreRef.current
    if (!mesh) return
    mesh.lookAt(camera.position)
  })

  return (
    <group name="HoleCore">
      <mesh scale={[10, 10, 10]} ref={coreRef}>
        <planeGeometry args={[1, 1]} />
        <rawShaderMaterial
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          glslVersion={GLSL3}
          side={DoubleSide}
          transparent
        />
      </mesh>
      <Mask />
    </group>
  )
}

export default HoleCore
