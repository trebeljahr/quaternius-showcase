import { Camera, Group, Vector3 } from 'three'

function calculateIdealOffset(target: Group) {
  const idealOffset = new Vector3(-10, 15, -20)
  idealOffset.applyQuaternion(target.quaternion)
  idealOffset.add(target.position)
  return idealOffset
}

function calculateIdealLookat(target: Group) {
  const idealLookat = new Vector3(0, 10, 20)
  idealLookat.applyQuaternion(target.quaternion)
  idealLookat.add(target.position)
  return idealLookat
}

const currentPosition = new Vector3()
const currentLookAt = new Vector3()

export function updateThirdPersonCamera(camera: Camera, target: Group, timeElapsed: number) {
  const idealOffset = calculateIdealOffset(target)
  const idealLookat = calculateIdealLookat(target)

  const t = 1.0 - Math.pow(0.001, timeElapsed * 100)

  currentPosition.lerp(idealOffset, t)
  currentLookAt.lerp(idealLookat, t)

  camera.position.copy(currentPosition)
  camera.lookAt(currentLookAt)
}
