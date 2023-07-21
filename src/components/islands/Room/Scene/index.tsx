import { PresentationControls, ContactShadows, Float } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { NoToneMapping } from 'three'
import { Suspense } from 'react'

import Lavaballs from './Walls/Lavaballs'
import Figures from './Walls/Figures'
import Plants from './Walls/Plants'
import Screen from './Walls/Screen'
import Chair from './Walls/Chair'
import Camera from './Camera'
import Walls from './Walls'

const Scene = () => {
  return (
    <Suspense fallback={null}>
      <Canvas
        className="canvas aspect-[1/0.9] touch-none lg:!absolute lg:left-[50%] lg:top-0 lg:aspect-auto lg:!h-full lg:!w-full lg:max-w-3xl lg:translate-x-[calc(-50%+18rem)]"
        gl={{ toneMapping: NoToneMapping, antialias: true }}
        dpr={[1, 2]}
      >
        <Camera />

        <PresentationControls
          azimuth={[-Math.PI / 4, Math.PI / 4]}
          rotation={[0.2, -Math.PI / 4, 0]}
          polar={[0, Math.PI / 14]}
          zoom={1.1}
          global
          snap
        >
          <Float floatIntensity={0.5} speed={0.5}>
            <Walls>
              <Chair />
              <Screen />
              <Plants />
              <Figures />
              <Lavaballs />
            </Walls>
          </Float>
        </PresentationControls>

        <ContactShadows
          position={[0, -3, 0]}
          resolution={256}
          opacity={0.5}
          scale={50}
          blur={2}
          far={5}
        />
      </Canvas>
    </Suspense>
  )
}

export default Scene
