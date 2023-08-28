import fragmentShader from '@/utils/shaders/holeCoreMask/shader.fragment.glsl'
import vertexShader from '@/utils/shaders/holeCoreMask/shader.vertex.glsl'
import { DoubleSide, GLSL3 } from 'three'

const Mask = () => {
  return (
    <mesh rotation-x={Math.PI * 0.5} scale={[10, 10, 10]}>
      <planeGeometry args={[1, 1]} />
      <rawShaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        glslVersion={GLSL3}
        transparent={true}
        side={DoubleSide}
      />
    </mesh>
  )
}
export default Mask
