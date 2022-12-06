import { Camera, Group, Vector3 } from 'three'

export function calculateIdealOffset(target: Group) {
  const idealOffset = new Vector3(-10, 15, -20)
  idealOffset.applyQuaternion(target.quaternion)
  idealOffset.add(target.position)
  return idealOffset
}

export function calculateIdealLookat(target: Group) {
  const idealLookat = new Vector3(0, 10, 20)
  idealLookat.applyQuaternion(target.quaternion)
  idealLookat.add(target.position)
  return idealLookat
}

export function resetThirdPersonCamera(camera: Camera, target: Group) {
  const idealOffset = calculateIdealOffset(target)
  const idealLookat = calculateIdealLookat(target)
  updateCamera(camera, idealOffset, idealLookat)
}

const currentPosition = new Vector3()
const currentLookAt = new Vector3()

function updateCamera(camera: Camera, pos: Vector3, lookAt: Vector3) {
  camera.position.copy(pos)
  camera.lookAt(lookAt)
}

export function updateThirdPersonCamera(camera: Camera, target: Group, timeElapsed: number) {
  const idealOffset = calculateIdealOffset(target)
  const idealLookat = calculateIdealLookat(target)

  const t = 1.0 - Math.pow(0.001, timeElapsed * 100)

  currentPosition.lerp(idealOffset, t)
  currentLookAt.lerp(idealLookat, t)

  updateCamera(camera, currentPosition, currentLookAt)
}
