import {
  OrthographicCamera,
  RawShaderMaterial,
  WebGLRenderTarget,
  RepeatWrapping,
  PlaneGeometry,
  GLSL3,
  Scene,
  Mesh,
} from 'three'
import fragmentShader from '@/utils/shaders/noise/shader.fragment.glsl'
import vertexShader from '@/utils/shaders/noise/shader.vertex.glsl'
import { useThree } from '@react-three/fiber'

const useNoiseTexture = (width: number, height: number) => {
  const { gl } = useThree()
  const customRender = {
    plane: new Mesh(
      new PlaneGeometry(2, 2),
      new RawShaderMaterial({
        glslVersion: GLSL3,
        fragmentShader,
        vertexShader,
        uniforms: {},
      })
    ),
    camera: new OrthographicCamera(-1, 1, 1, -1, 0.1, 10),
    scene: new Scene(),
  }
  customRender.plane.frustumCulled = false
  customRender.scene.add(customRender.plane)

  const getTexture = () => {
    const renderTarget = new WebGLRenderTarget(width, height, {
      generateMipmaps: false,
      wrapS: RepeatWrapping,
      wrapT: RepeatWrapping,
    })
    gl.setRenderTarget(renderTarget)
    gl.render(customRender.scene, customRender.camera)
    gl.setRenderTarget(null)
    return renderTarget.texture
  }

  return getTexture()
}

export default useNoiseTexture
