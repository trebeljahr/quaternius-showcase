import { Camera, Group, Quaternion, Vector3 } from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, useKeyboardControls } from '@react-three/drei'
import { PropsWithChildren, useEffect, useRef } from 'react'
import { resetThirdPersonCamera, updateThirdPersonCamera } from '@/hooks/useThirdPersonCamera'

const rotationSpeed = 20
const speed = 2000

export function PlayerController({ children }: PropsWithChildren) {
  const [, get] = useKeyboardControls()

  const group = useRef<Group>()

  const { camera } = useThree()

  useEffect(() => {
    if (!group.current) return

    resetThirdPersonCamera(camera, group.current)
  }, [camera, group])

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

  return (
    <group ref={group}>
      {children}
      <OrbitControls />
    </group>
  )
}

const velocity = 20

export function ImprovedPlayerController({ children }: PropsWithChildren) {
  const group = useRef<Group>()
  const cameraTargetRef = useRef([0, 0, 0])
  const walkDirectionRef = useRef(new Vector3())
  const rotateAngleRef = useRef(new Vector3(0, 1, 0))
  const rotateQuarternionRef = useRef(new Quaternion())

  const { camera } = useThree()
  const [, get] = useKeyboardControls()

  useFrame((_, delta) => {
    const model = group.current
    const cameraTarget = cameraTargetRef.current
    const walkDirection = walkDirectionRef.current
    const rotateAngle = rotateAngleRef.current
    const rotateQuarternion = rotateQuarternionRef.current

    if (!model || !cameraTarget) return

    function updateCameraTarget(moveX: number, moveZ: number) {
      camera.position.x += moveX
      camera.position.z += moveZ

      cameraTarget[0] = model.position.x
      cameraTarget[1] = model.position.y + 1
      cameraTarget[2] = model.position.z
    }

    function getDirectionOffset() {
      let directionOffset = 0
      const { forward, left, right, backward } = get()

      if (forward) {
        if (left) {
          directionOffset = Math.PI / 4
        } else if (right) {
          directionOffset = -Math.PI / 4
        }
      } else if (backward) {
        if (left) {
          directionOffset = Math.PI / 4 + Math.PI / 2
        } else if (right) {
          directionOffset = -Math.PI / 4 - Math.PI / 2
        } else {
          directionOffset = Math.PI
        }
      } else if (left) {
        directionOffset = Math.PI / 2
      } else if (right) {
        directionOffset = -Math.PI / 2
      }

      return directionOffset
    }

    function updateCamera() {
      let angleYCameraDirection = Math.atan2(camera.position.x - model.position.x, camera.position.z - model.position.z)
      let directionOffset = getDirectionOffset()

      rotateQuarternion.setFromAxisAngle(rotateAngle, angleYCameraDirection + directionOffset)
      model.quaternion.rotateTowards(rotateQuarternion, 0.2)

      camera.getWorldDirection(walkDirection)
      walkDirection.y = 0
      walkDirection.normalize()
      walkDirection.applyAxisAngle(rotateAngle, directionOffset)

      const moveX = walkDirection.x * velocity * delta
      const moveZ = walkDirection.z * velocity * delta
      model.position.x += moveX
      model.position.z += moveZ
      updateCameraTarget(moveX, moveZ)
    }

    updateCamera()
  })

  return (
    <group ref={group}>
      {children}
      <OrbitControls />
    </group>
  )
}
