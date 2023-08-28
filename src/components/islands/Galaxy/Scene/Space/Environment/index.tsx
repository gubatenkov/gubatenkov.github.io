import type { ProjectionPlaneUniforms } from '@/utils/hooks/useProjectionPlane'

import useProjectionPlane from '@/utils/hooks/useProjectionPlane'
import { createPortal, useFrame } from '@react-three/fiber'
import useWindow from '@/utils/hooks/useWindow'
import { LinearFilter, Scene } from 'three'
import { useFBO } from '@react-three/drei'
import { type FC, useMemo } from 'react'

import Particles from './Particles'
import Stars from './Stars'
import Disc from './Disc'

const offscreenScene = new Scene()

const Environtment: FC = () => {
  const projection = useProjectionPlane()
  const winDimensions = useWindow()
  const renderTarget = useFBO(
    winDimensions.width * 2,
    winDimensions.height * 2,
    {
      magFilter: LinearFilter,
      minFilter: LinearFilter,
    }
  )

  useFrame(({ camera, gl }) => {
    if (!projection) return
    const uniforms = projection.material.uniforms as ProjectionPlaneUniforms
    uniforms.uSpaceTexture.value = renderTarget.texture
    gl.setRenderTarget(renderTarget)
    gl.render(offscreenScene, camera)
    gl.setRenderTarget(null)
  })

  const portal = useMemo(
    () =>
      createPortal(
        <>
          <Particles />
          <Stars />
          <Disc />
        </>,
        offscreenScene
      ),
    [offscreenScene]
  )

  return <>{portal}</>
}
export default Environtment
