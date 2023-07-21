import { SRGBColorSpace, LinearFilter } from 'three'
import { useTexture } from '@react-three/drei'

const useMap = (path: string) => {
  const map = useTexture(path)
  map.flipY = false
  map.magFilter = LinearFilter
  map.minFilter = LinearFilter
  map.colorSpace = SRGBColorSpace
  return map
}

export default useMap
