import { Vector3 } from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { useKeyboardControls } from '@react-three/drei'
import { useRef } from 'react'
import { RigidBody, RigidBodyApi, useRapier } from '@react-three/rapier'

const SPEED = 5
const direction = new Vector3()
const frontVector = new Vector3()
const sideVector = new Vector3()

export function Player() {
  const [, get] = useKeyboardControls()
  const ref = useRef<RigidBodyApi>()
  const { camera } = useThree()

  useFrame((state) => {
    if (!ref.current) return

    const { forward, backward, left, right, jump, descend } = get()

    const velocity = ref.current.linvel()
    camera.position.set(...ref.current.translation().toArray())

    // @ts-ignore:next-line
    frontVector.set(0, 0, backward - forward)
    // @ts-ignore:next-line
    sideVector.set(left - right, 0, 0)

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation)
      // @ts-ignore:next-line
      .setY((jump - descend) * SPEED)

    ref.current.setLinvel({ x: direction.x, y: direction.y, z: direction.z })
  })

  return (
    <RigidBody
      ref={ref}
      colliders={false}
      mass={1}
      type='dynamic'
      position={[0, 10, 0]}
      enabledRotations={[false, false, false]}
    />
  )
}
