import { Group, Object3D, Quaternion, Vector3 } from 'three'
import { useFrame } from '@react-three/fiber'
import { useKeyboardControls } from '@react-three/drei'
import { PropsWithChildren, useRef } from 'react'
import { RigidBody, RigidBodyApi } from '@react-three/rapier'
import { useThirdPersonCamera } from '@/hooks/useThirdPersonCamera'

const SPEED = 5
const direction = new Vector3()
const frontVector = new Vector3()
const sideVector = new Vector3()

function controlObject(controlObject: Object3D, elapsedTime: number) {
  const velocity = ref.current.linvel()

  const _R = controlObject.quaternion.clone()

  controlObject.quaternion.copy(_R)

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
}

export function PlayerController({ children }: PropsWithChildren) {
  const [, get] = useKeyboardControls()

  const ref = useRef<RigidBodyApi>()
  const group = useRef<Group>()

  useThirdPersonCamera({ target: group.current })

  useFrame(() => {
    if (!ref.current || !group.current) return

    const { forward, backward, left, right, jump, descend } = get()
    group.current.position.set(...ref.current.translation().toArray())

    frontVector.set(0, 0, +forward - +backward)
    sideVector.set(+right - +left, 0, 0)

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      // .applyEuler(group.current.rotation)
      .setY((+jump - +descend) * SPEED)

    ref.current.setLinvel({ x: direction.x, y: direction.y, z: direction.z })
  })

  return (
    <RigidBody
      ref={ref}
      colliders={false}
      mass={1}
      type='dynamic'
      position={[0, 10, 0]}
      enabledRotations={[false, false, false]}>
      <group ref={group}>{children}</group>
    </RigidBody>
  )
}
