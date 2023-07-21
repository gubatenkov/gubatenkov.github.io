import { MeshBasicMaterial, Mesh } from 'three'
import { useGLTF } from '@react-three/drei'
import { useEffect, useMemo } from 'react'
import useMap from '@/utils/hooks/useMap'

const Plants = () => {
  const map = useMap('/textures/plants.jpg')
  const { scene } = useGLTF('/models/plants.glb', '/draco/')
  const material = useMemo(() => new MeshBasicMaterial({ map }), [map])

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof Mesh) {
        child.material = material
      }
    })
  }, [scene, map])

  return <primitive object={scene} />
}

export default Plants
