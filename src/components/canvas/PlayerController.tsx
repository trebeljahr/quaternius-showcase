import { Group, Quaternion, Vector3 } from 'three'
import { useFrame } from '@react-three/fiber'
import { useKeyboardControls } from '@react-three/drei'
import { PropsWithChildren, useRef } from 'react'
import { RigidBodyApi } from '@react-three/rapier'
import { useThirdPersonCamera } from '@/hooks/useThirdPersonCamera'

const decceleration = new Vector3(-0.0005, -0.0001, -5.0)
const acceleration = new Vector3(10, 2.5, 500.0)
const velocity = new Vector3(0, 0, 0)

export function PlayerController({ children }: PropsWithChildren) {
  const [, get] = useKeyboardControls()

  const group = useRef<Group>()

  useThirdPersonCamera({ target: group.current })

  useFrame((state) => {
    if (!group.current) return
    const elapsedTime = state.clock.getDelta()

    const { forward, backward, left, right } = get()
    const controlObject = group.current
    const Q = new Quaternion()
    const A = new Vector3()
    const R = controlObject.quaternion.clone()

    const acc = acceleration.clone()

    const frameDecceleration = new Vector3(
      velocity.x * decceleration.x,
      velocity.y * decceleration.y,
      velocity.z * decceleration.z,
    )
    frameDecceleration.multiplyScalar(elapsedTime)
    frameDecceleration.z =
      Math.sign(frameDecceleration.z) * Math.min(Math.abs(frameDecceleration.z), Math.abs(velocity.z))

    velocity.add(frameDecceleration)

    if (forward) {
      velocity.z += acc.z * elapsedTime
    }
    if (backward) {
      velocity.z -= acc.z * elapsedTime
    }
    if (left) {
      A.set(0, 1, 0)
      Q.setFromAxisAngle(A, 4.0 * Math.PI * elapsedTime * acceleration.y)
      R.multiply(Q)
    }
    if (right) {
      A.set(0, 1, 0)
      Q.setFromAxisAngle(A, 4.0 * -Math.PI * elapsedTime * acceleration.y)
      R.multiply(Q)
    }

    controlObject.quaternion.copy(R)

    const oldPosition = new Vector3()
    oldPosition.copy(controlObject.position)

    const forwardVec = new Vector3(0, 0, 1)
    forwardVec.applyQuaternion(controlObject.quaternion)
    forwardVec.normalize()

    const sideways = new Vector3(1, 0, 0)
    sideways.applyQuaternion(controlObject.quaternion)
    sideways.normalize()

    sideways.multiplyScalar(velocity.x * elapsedTime)
    forwardVec.multiplyScalar(velocity.z * elapsedTime)

    controlObject.position.add(forwardVec)
    controlObject.position.add(sideways)

    group.current.position.copy(controlObject.position)

    console.log(group.current.position)
  })

  return <group ref={group}>{children}</group>
}
