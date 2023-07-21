import type { MarchingCubes } from 'three/examples/jsm/objects/MarchingCubes'

import fragmentShader from '@/utils/shaders/lavaballs/shader.fragment.glsl'
import vertexShader from '@/utils/shaders/lavaballs/shader.vertex.glsl'
import { MarchingCubes as Cubes } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { updateCubes } from '@/utils/helpers'
import { useRef } from 'react'
import { Color } from 'three'

const uniforms = {
  glowColor: { value: new Color('orange') },
  p: { value: 1.4 },
  c: { value: 1.9 },
}

const Lavaballs = () => {
  const ref = useRef<MarchingCubes>(null)
  const { camera } = useThree()

  useFrame((state) => {
    const time = state.clock.elapsedTime
    const slowedTime = time / 3
    if (ref.current) updateCubes(ref.current, slowedTime, 3)
  })

  return (
    <Cubes
      position={[-1.91, 2.32, -2.74]}
      scale={[0.2, 0.2, 0.2]}
      resolution={30}
      ref={ref}
    >
      <shaderMaterial
        uniforms={{ ...uniforms, viewVector: { value: camera.position } }}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
      />
    </Cubes>
  )
}

export default Lavaballs
