import type { ProjectionPlaneUniforms } from '@/utils/hooks/useProjectionPlane'

import useProjectionPlane from '@/utils/hooks/useProjectionPlane'
import { LinearFilter, RedFormat, FloatType, Scene } from 'three'
import { createPortal, useFrame } from '@react-three/fiber'
import useWindow from '@/utils/hooks/useWindow'
import { useFBO } from '@react-three/drei'
import { useMemo } from 'react'

import HoleCore from './HoleCore'

const offscreenScene = new Scene()

const Hole = () => {
  const projection = useProjectionPlane()
  const winDimensions = useWindow()
  const renderTarget = useFBO(
    winDimensions.width * 0.5,
    winDimensions.height * 0.5,
    {
      minFilter: LinearFilter,
      magFilter: LinearFilter,
      format: RedFormat,
      type: FloatType,
    }
  )

  useFrame(({ camera, gl }) => {
    if (!projection) return
    const uniforms = projection.material.uniforms as ProjectionPlaneUniforms
    gl.setRenderTarget(renderTarget)
    gl.render(offscreenScene, camera)
    uniforms.uDistortionTexture.value = renderTarget.texture
    gl.setRenderTarget(null)
  })

  const portal = useMemo(
    () => createPortal(<HoleCore />, offscreenScene),
    [offscreenScene]
  )

  return <>{portal}</>
}
export default Hole
