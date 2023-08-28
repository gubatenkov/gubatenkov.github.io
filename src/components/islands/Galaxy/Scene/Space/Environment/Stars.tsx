import { RawShaderMaterial, BufferGeometry, Points, GLSL3, Color } from 'three'
import fragmentShader from '@/utils/shaders/stars/shader.fragment.glsl'
import vertexShader from '@/utils/shaders/stars/shader.vertex.glsl'
import { useMemo, type FC, useRef } from 'react'
import useWindow from '@/utils/hooks/useWindow'

type TPoints = Points<BufferGeometry, RawShaderMaterial>

type Props = {
  count?: number
}

const Stars: FC<Props> = ({ count = 50000 }) => {
  const [positionArray, colorArray, sizeArray] = useMemo(() => {
    const positionArray = new Float32Array(count * 3)
    const colorArray = new Float32Array(count * 3)
    const sizeArray = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const iStride3 = i * 3
      const theta = 2 * Math.PI * Math.random()
      const phi = Math.acos(2 * Math.random() - 1.0)
      const x = Math.cos(theta) * Math.sin(phi) * 400
      const y = Math.sin(theta) * Math.sin(phi) * 400
      const z = Math.cos(phi) * 400

      positionArray[iStride3 + 0] = x
      positionArray[iStride3 + 1] = y
      positionArray[iStride3 + 2] = z

      sizeArray[i] = Math.random()

      const color = new Color(
        `hsl(${Math.round(360 * Math.random())}, 100%, 80%)`
      )
      colorArray[iStride3 + 0] = color.r
      colorArray[iStride3 + 1] = color.g
      colorArray[iStride3 + 2] = color.b
    }

    return [positionArray, colorArray, sizeArray]
  }, [count])
  const pointsRef = useRef<TPoints>(null)
  const dimensions = useWindow()

  return (
    <points frustumCulled={false} ref={pointsRef}>
      <rawShaderMaterial
        uniforms={{
          uViewHeight: { value: dimensions.height * 2 },
          uSize: { value: 0.001 },
        }}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        glslVersion={GLSL3}
        depthWrite={false}
        depthTest={false}
      />
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positionArray}
          count={count}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aSize"
          array={sizeArray}
          count={count}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-aColor"
          array={colorArray}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
    </points>
  )
}

export default Stars
