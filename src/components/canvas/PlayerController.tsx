import { Group, Quaternion, Vector3 } from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { useKeyboardControls } from '@react-three/drei'
import { PropsWithChildren, useRef } from 'react'
import { updateThirdPersonCamera } from '@/hooks/useThirdPersonCamera'

const rotationSpeed = 20
const speed = 2000

export function PlayerController({ children }: PropsWithChildren) {
  const [, get] = useKeyboardControls()

  const group = useRef<Group>()

  const { camera } = useThree()

  useFrame((state) => {
    if (!group.current) return

    const { forward, backward, left, right } = get()

    const Q = new Quaternion()
    const A = new Vector3()
    const elapsedTime = state.clock.getDelta()

    if (left) {
      A.set(0, 1, 0)
      Q.setFromAxisAngle(A, rotationSpeed * Math.PI * elapsedTime)
      group.current.quaternion.multiply(Q)
    }
    if (right) {
      A.set(0, 1, 0)
      Q.setFromAxisAngle(A, rotationSpeed * -Math.PI * elapsedTime)
      group.current.quaternion.multiply(Q)
    }

    const vel = new Vector3(0, 0, 0)
    if (forward) {
      vel.set(0, 0, 1)
    }

    if (backward) {
      vel.set(0, 0, -1)
    }

    const forwardVec = new Vector3(0, 0, 1)
    forwardVec.applyQuaternion(group.current.quaternion)
    forwardVec.normalize()

    const sidewaysVec = new Vector3(1, 0, 0)
    sidewaysVec.applyQuaternion(group.current.quaternion)
    sidewaysVec.normalize()

    sidewaysVec.multiplyScalar(vel.x * elapsedTime * speed)
    forwardVec.multiplyScalar(vel.z * elapsedTime * speed)

    group.current.position.add(forwardVec)
    group.current.position.add(sidewaysVec)

    updateThirdPersonCamera(camera, group.current, elapsedTime)
  })

  return <group ref={group}>{children}</group>
}
