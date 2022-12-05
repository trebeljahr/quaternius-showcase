import { PointerLockControls } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import { useRef } from 'react'
import { DoubleSide, Group } from 'three'
import { PlayerController } from './PlayerController'
import { Trex } from './Trex'

export function Plane() {
  return (
    <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
      <planeGeometry />
      <meshBasicMaterial color='green' side={DoubleSide} />
    </mesh>
  )
}

export default function ThirdPersonDemo() {
  const ref = useRef<Group>()
  return (
    <>
      <Physics>
        <PlayerController>
          <Trex />
        </PlayerController>
        <Plane />
        <PointerLockControls />
      </Physics>
    </>
  )
}
