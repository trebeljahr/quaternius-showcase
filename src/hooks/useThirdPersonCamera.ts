import { useFrame, useThree } from '@react-three/fiber'
import { Group, Vector3 } from 'three'

const currentPosition = new Vector3()
const currentLookat = new Vector3()

export function useThirdPersonCamera({ target }: { target: Group }) {
  const { camera } = useThree()

  function calculateIdealOffset() {
    const idealOffset = new Vector3(-15, 20, -30)
    idealOffset.applyQuaternion(target.quaternion)
    idealOffset.add(target.position)
    return idealOffset
  }

  function calculateIdealLookat() {
    const idealLookat = new Vector3(0, 10, 50)
    idealLookat.applyQuaternion(target.quaternion)
    idealLookat.add(target.position)
    return idealLookat
  }

  function update(timeElapsed: number) {
    const idealOffset = calculateIdealOffset()
    const idealLookat = calculateIdealLookat()

    const t = 1.0 - Math.pow(0.001, timeElapsed)

    currentPosition.lerp(idealOffset, t)
    currentLookat.lerp(idealLookat, t)

    camera.position.copy(currentPosition)
    camera.lookAt(currentLookat)
  }

  useFrame((state) => {
    if (!target) return
    update(state.clock.getDelta())
  })
}
