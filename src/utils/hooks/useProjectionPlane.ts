import {
  RawShaderMaterial,
  PlaneGeometry,
  Vector3,
  Texture,
  Uniform,
  Vector2,
  GLSL3,
  Mesh,
} from 'three'
import fragmentShader from '@/utils/shaders/final/shader.fragment.glsl'
import vertexShader from '@/utils/shaders/final/shader.vertex.glsl'
import { useFrame } from '@react-three/fiber'

const uniforms = {
  uBlackHolePosition: { value: new Vector2() },
  uDistortionTexture: {
    value: null,
  },
  uRGBShiftRadius: { value: 0.00001 },
  uSpaceTexture: { value: null },
}

type TUniforms = typeof uniforms

export type ProjectionPlaneUniforms = {
  [K in keyof TUniforms]: K extends `${string}Texture`
    ? Uniform<Texture>
    : TUniforms[K]
}

const projectionPlane = new Mesh(
  new PlaneGeometry(2, 2),
  new RawShaderMaterial({
    glslVersion: GLSL3,
    depthWrite: false,
    depthTest: false,
    fragmentShader,
    vertexShader,
    uniforms,
  })
)

const useProjectionPlane = () => {
  useFrame(({ scene }) => {
    let projectionNotExist = true
    scene.traverse((child) => {
      if (child.id === projectionPlane.id) {
        projectionNotExist = false
      }
    })
    if (projectionNotExist) {
      scene.add(projectionPlane)
    }
  })

  // update projection material
  useFrame(({ camera }) => {
    const screenPosition = new Vector3(0, 0, 0)
    screenPosition.project(camera)
    screenPosition.x = screenPosition.x * 0.5 + 0.5
    screenPosition.y = screenPosition.y * 0.5 + 0.5
    uniforms.uBlackHolePosition.value.set(screenPosition.x, screenPosition.y)
  })

  return projectionPlane
}
export default useProjectionPlane
