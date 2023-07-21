import { useAnimations, useGLTF } from '@react-three/drei'
import { MeshPhysicalMaterial, Color, Mesh } from 'three'
import { useEffect, useMemo, useRef } from 'react'
import useMap from '@/utils/hooks/useMap'

const colors = ['green', 'red', 'blue', 'violet']
const figures = [
  '/models/figureA.glb',
  '/models/figureB.glb',
  '/models/figureO.glb',
  '/models/figureX.glb',
]

const Figures = () => {
  const figureRef = useRef(null)
  const map = useMap('/textures/4kBaked.jpg')
  const [a, ...rest] = useGLTF(figures, '/draco/')
  const { mixer, clips } = useAnimations(a.animations, figureRef)
  const materials = useMemo(() => {
    return colors.map(
      (color, idx) =>
        new MeshPhysicalMaterial({
          emissiveIntensity: idx === 0 ? 3 : 0.3,
          emissive: new Color(color),
          transmission: 1,
          thickness: 0.5,
          roughness: 0,
          color,
          map,
        })
    )
  }, [])

  useEffect(() => {
    ;[a, ...rest].forEach((item, idx) => {
      item.scene.traverse((child) => {
        if (child instanceof Mesh) {
          child.material = materials[idx]
        }
      })
    })
  }, [])

  useEffect(() => {
    mixer.clipAction(clips[0]).play()
  }, [])

  return (
    <group>
      <primitive key={a.scene.name} object={a.scene} ref={figureRef} />
      {rest.map((gltf, idx) => (
        <primitive key={gltf.scene.name + idx} object={gltf.scene} />
      ))}
    </group>
  )
}

export default Figures
