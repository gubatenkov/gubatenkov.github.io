import type { PerspectiveCamera } from 'three'

import { PerspectiveCamera as MainCamera } from '@react-three/drei'
import useMediaQuery from '@/utils/hooks/useMediaQuery'
import { useRef } from 'react'

const Camera = () => {
  const ref = useRef<PerspectiveCamera>(null)
  const isMatch = useMediaQuery('(max-width: 1024px)')

  return (
    <MainCamera
      position={isMatch ? [0, 1.75, 19] : [0, 1.75, 20]}
      makeDefault
      near={0.1}
      ref={ref}
      far={50}
      fov={50}
    />
  )
}

export default Camera
