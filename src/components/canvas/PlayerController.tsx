import { Group, Quaternion, Vector3 } from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, useKeyboardControls } from '@react-three/drei'
import React, { MutableRefObject, useEffect, useRef } from 'react'
import { Trex } from './Trex'
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib'

const velocity = 5

export function useCharacterController(
  modelRef: MutableRefObject<Group>,
  orbitControlsRef: MutableRefObject<OrbitControlsImpl>,
) {
  const walkDirectionRef = useRef(new Vector3())
  const rotateAngleRef = useRef(new Vector3(0, 1, 0))
  const rotateQuaternionRef = useRef(new Quaternion())
  const cameraTargetRef = useRef(new Vector3())

  const { camera } = useThree()
  const [, get] = useKeyboardControls()

  useEffect(() => {
    const model = modelRef.current
    const cameraTarget = cameraTargetRef.current
    const orbitControls = orbitControlsRef.current
    if (!model || !orbitControls || !cameraTarget) return

    cameraTarget.x = model.position.x
    cameraTarget.y = model.position.y + 1
    cameraTarget.z = model.position.z
    orbitControls.target = cameraTarget
  }, [orbitControlsRef, modelRef, cameraTargetRef])

  useFrame((_, delta) => {
    const model = modelRef.current
    const walkDirection = walkDirectionRef.current
    const rotateAngle = rotateAngleRef.current
    const rotateQuaternion = rotateQuaternionRef.current
    const cameraTarget = cameraTargetRef.current
    const orbitControls = orbitControlsRef.current

    if (!model || !walkDirection || !rotateAngle || !rotateQuaternion || !cameraTarget || !orbitControls) return

    function updateCameraTarget(moveX: number, moveZ: number) {
      camera.position.x += moveX
      camera.position.z += moveZ

      cameraTarget.x = model.position.x
      cameraTarget.y = model.position.y
      cameraTarget.z = model.position.z

      orbitControls.target = cameraTarget

      // console.log(cameraTarget.current)
      // console.log(cameraTargetRef.current)
      // console.log(model.position)
      // console.log(camera.position)
      console.log(orbitControls.target.clone().sub(model.position).length())

      // console.log(camera.position.clone().sub(model.position).length())
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
  const orbitControlsRef = useRef<OrbitControlsImpl>()

  useCharacterController(modelRef, orbitControlsRef)

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

      <OrbitControls ref={orbitControlsRef} {...orbitControlsProps} />
    </>
  )
}
