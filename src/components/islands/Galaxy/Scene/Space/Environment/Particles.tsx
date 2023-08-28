import {
  RawShaderMaterial,
  AdditiveBlending,
  BufferGeometry,
  Points,
  GLSL3,
  Color,
} from 'three'
import fragmentShader from '@/utils/shaders/blackHole/shader.fragment.glsl'
import vertexShader from '@/utils/shaders/blackHole/shader.vertex.glsl'
import { type FC, useMemo, useRef } from 'react'
import useWindow from '@/utils/hooks/useWindow'
import { useFrame } from '@react-three/fiber'

type TPoints = Points<BufferGeometry, RawShaderMaterial>

type Props = {
  count?: number
}

const Particles: FC<Props> = ({ count = 50000 }) => {
  const [distanceArray, randomArray, sizeArray] = useMemo(() => {
    const sizeArray = new Float32Array(count)
    const randomArray = new Float32Array(count)
    const distanceArray = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      distanceArray[i] = Math.random()
      sizeArray[i] = Math.random()
      randomArray[i] = Math.random()
    }

    return [distanceArray, randomArray, sizeArray]
  }, [count])
  const pointsRef = useRef<TPoints>(null)
  const winDimensions = useWindow()

  useFrame(() => {
    const points = pointsRef.current
    if (!points) return
    // set initial position for particles
    points.material.uniforms.uTime.value = 1000
    points.material.uniforms.uTime.value += 0.01
    // rotate particles
    points.rotation.y += 0.001
  })

  return (
    <points frustumCulled={false} ref={pointsRef}>
      <rawShaderMaterial
        uniforms={{
          uViewHeight: { value: winDimensions.height * 2 },
          uOuterColor: { value: new Color('#3633ff') },
          uInnerColor: { value: new Color('#ff8080') },
          uSize: { value: 0.015 },
          uTime: { value: 0 },
        }}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        blending={AdditiveBlending}
        glslVersion={GLSL3}
        depthWrite={false}
        depthTest={false}
        transparent
      />
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={distanceArray}
          count={count - 3}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-aRandom"
          array={randomArray}
          count={count}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-aSize"
          array={sizeArray}
          count={count}
          itemSize={1}
        />
      </bufferGeometry>
    </points>
  )
}

export default Particles
