import { PointerLockControls } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import { useRef } from 'react'
import { DoubleSide, Group, Vector3 } from 'three'
import { BirchTree } from './BirchTree_5'
import { PlayerController } from './PlayerController'
import { Trex } from './Trex'

// function getRandomArbitrary(min: number, max: number) {
//     return Math.random() * (max - min) + min;
// }

function random(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function Trees() {
  const positions = new Array(100).fill(0).map(() => new Vector3(random(-200, 200), 0, random(-200, 200)))
  return (
    <>
      {positions.map((pos, index) => {
        console.log(pos)
        return <BirchTree key={index} position={pos} scale={new Vector3(5, 5, 5)} />
      })}
    </>
  )
}
export function Plane() {
  return (
    <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1000, 1000, 1000]}>
      <planeGeometry />
      <meshBasicMaterial color='green' side={DoubleSide} />
    </mesh>
  )
}

export default function ThirdPersonDemo() {
  return (
    <>
      <Physics>
        <PlayerController>
          <Trex />
        </PlayerController>
        <Trees />
        <Plane />
        <PointerLockControls />
      </Physics>
    </>
  )
}
