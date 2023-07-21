import type { MarchingCubes } from 'three/examples/jsm/objects/MarchingCubes'

export function updateCubes(
  object: MarchingCubes,
  time: number,
  numblobs: number
) {
  object.reset()
  // Fill the field with some lavaballs
  const subtract = 12
  const strength = 1.2 / ((Math.sqrt(numblobs) - 1) / 4 + 1)

  for (let i = 0; i < numblobs; i++) {
    const ballx =
      Math.sin(i + 1.26 * time * (1.03 + 0.5 * Math.cos(0.21 * i))) * 0.01 + 0.5
    const bally =
      Math.abs(Math.cos(i + 1.12 * time * Math.cos(1.22 + 0.1424 * i)) / 1.35) +
      0.1
    const ballz =
      Math.cos(i + 1.32 * time * 0.1 * Math.sin(0.92 + 0.53 * i)) * 0.01 + 0.5

    object.addBall(ballx, bally, ballz, strength, subtract)
  }

  object.update()
}
