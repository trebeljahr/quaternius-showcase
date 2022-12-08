import { Group, Quaternion, Vector3 } from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, useKeyboardControls } from '@react-three/drei'
import React, { MutableRefObject, useEffect, useRef } from 'react'
import { Trex } from './Trex'

const velocity = 5

export function useCharacterController(modelRef: MutableRefObject<Group>, cameraTargetRef: MutableRefObject<Vector3>) {
  const walkDirectionRef = useRef(new Vector3())
  const rotateAngleRef = useRef(new Vector3(0, 1, 0))
  const rotateQuaternionRef = useRef(new Quaternion())
  const cameraTarget = useRef(new Vector3())

  const { camera } = useThree()
  const [, get] = useKeyboardControls()

  useEffect(() => {
    const model = modelRef.current
    cameraTarget.current.x = model.position.x
    cameraTarget.current.y = model.position.y + 1
    cameraTarget.current.z = model.position.z
    cameraTargetRef.current = cameraTarget.current
  }, [cameraTargetRef, modelRef, cameraTarget])

  useFrame((_, delta) => {
    const model = modelRef.current
    const walkDirection = walkDirectionRef.current
    const rotateAngle = rotateAngleRef.current
    const rotateQuaternion = rotateQuaternionRef.current

    if (!model || !walkDirection || !rotateAngle || !rotateQuaternion) return

    function updateCameraTarget(moveX: number, moveZ: number) {
      camera.position.x += moveX
      camera.position.z += moveZ

      cameraTarget.current.x = model.position.x
      cameraTarget.current.y = model.position.y + 1
      cameraTarget.current.z = model.position.z

      cameraTargetRef.current = cameraTarget.current

      console.log({ target: cameraTarget.current })
      console.log({ target: cameraTargetRef.current })
      console.log({ object: model.position })
      console.log({ camera: camera.position })
    }

    function getDirectionOffset() {
      let directionOffset = 0
      const { forward, left, right, backward } = get()
      if (!forward && !left && !right && !backward) return { directionOffset, isMoving: false }

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

      return { directionOffset, isMoving: true }
    }

    function updateCamera() {
      const { directionOffset, isMoving } = getDirectionOffset()
      if (!isMoving) return

      const angleYCameraDirection = Math.atan2(
        camera.position.x - model.position.x,
        camera.position.z - model.position.z,
      )

      rotateQuaternion.setFromAxisAngle(rotateAngle, angleYCameraDirection + directionOffset)
      model.quaternion.rotateTowards(rotateQuaternion, 0.2)

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
}
export function ImprovedPlayerController() {
  const modelRef = useRef<Group>()
  const cameraTargetRef = useRef(new Vector3())

  useCharacterController(modelRef, cameraTargetRef)

  const orbitControlsProps = {
    enableDamping: true,
    minDistance: 5,
    maxDistance: 15,
    enablePan: false,
    maxPolarAngle: Math.PI / 2 - 0.05,
  }
  return (
    <>
      <Trex ref={modelRef} />

      <OrbitControls target={cameraTargetRef.current} {...orbitControlsProps} />
    </>
  )
}
