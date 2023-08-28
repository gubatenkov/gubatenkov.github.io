import {
  RawShaderMaterial,
  AdditiveBlending,
  BufferGeometry,
  DoubleSide,
  GLSL3,
  Color,
  Mesh,
} from 'three'
import fragmentShader from '@/utils/shaders/disc/shader.fragment.glsl'
import vertexShader from '@/utils/shaders/disc/shader.vertex.glsl'
import useNoiseTexture from '@/utils/hooks/useNoiseTexture'
import { useFrame } from '@react-three/fiber'
import { useRef, memo } from 'react'

const Disc = memo(() => {
  const discRef = useRef<Mesh<BufferGeometry, RawShaderMaterial>>(null)
  const texture = useNoiseTexture(128, 128)

  useFrame(() => {
    const disc = discRef.current
    if (!disc) return
    // disc.material.uniforms.uTime.value += 0.01
    disc.rotation.y += 0.001
  })

  return (
    <mesh position={[0, 0, 0]} ref={discRef} name="Disc">
      <cylinderGeometry args={[5, 1, 0, 64, 10, true]} />
      <rawShaderMaterial
        uniforms={{
          uOuterColor: { value: new Color('#3633ff') },
          uInnerColor: { value: new Color('#ff8080') },
          uNoiseTexture: { value: texture },
          uTime: { value: 0 },
        }}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        blending={AdditiveBlending}
        glslVersion={GLSL3}
        depthWrite={false}
        depthTest={false}
        side={DoubleSide}
        transparent
      />
    </mesh>
  )
})

export default Disc
