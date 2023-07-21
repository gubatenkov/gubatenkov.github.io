import { useVideoTexture } from '@react-three/drei'
import { SRGBColorSpace } from 'three'

const Screen = () => {
  const map = useVideoTexture('/textures/trailer.mp4', {
    autoplay: true,
  })
  map.colorSpace = SRGBColorSpace

  return (
    <mesh position={[-3.85, 3.5, 0.94]} rotation-y={Math.PI / 2}>
      <meshBasicMaterial
        toneMapped={false}
        transparent={true}
        opacity={0.4}
        map={map}
      />
      <planeGeometry args={[4.9, 3]} />
    </mesh>
  )
}

export default Screen
