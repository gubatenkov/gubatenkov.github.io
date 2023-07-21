import type { FC } from 'react'

import { Canvas } from '@react-three/fiber'
import { Vector3 } from 'three'

import Space from './Space'

type Props = {
  className: string
}

const cameraProps = {
  position: new Vector3(4.75, 1.75, 4.75),
  near: 0.1,
  far: 1000,
  fov: 45,
}

const Scene: FC<Props> = ({ className }) => {
  return (
    <Canvas
      gl={{
        antialias: true,
      }}
      className={className}
      camera={cameraProps}
      dpr={[1, 2]}
      legacy
    >
      <color attach="background" args={['black']} />
      <Space />
    </Canvas>
  )
}
export default Scene
