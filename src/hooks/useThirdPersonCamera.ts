import { Camera, Group, Vector3 } from 'three'

const currentPosition = new Vector3()
const currentLookat = new Vector3()

function calculateIdealOffset(target: Group) {
  const idealOffset = new Vector3(0, 20, 0)
  idealOffset.applyQuaternion(target.quaternion)
  idealOffset.add(target.position)
  return idealOffset
}

function calculateIdealLookat(target: Group) {
  const idealLookat = new Vector3(0, 10, 10)
  idealLookat.applyQuaternion(target.quaternion)
  idealLookat.add(target.position)
  return idealLookat
}

export function updateThirdPersonCamera(camera: Camera, target: Group, timeElapsed: number) {
  const idealOffset = calculateIdealOffset(target)
  const idealLookat = calculateIdealLookat(target)

  const t = 1.0 - Math.pow(0.001, timeElapsed * 40)

  currentPosition.lerp(idealOffset, t)
  currentLookat.lerp(idealLookat, t)

  camera.position.copy(currentPosition)
  camera.lookAt(currentLookat)
}
