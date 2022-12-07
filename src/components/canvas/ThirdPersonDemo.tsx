import { PointerLockControls, Sky } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import { DoubleSide, Vector3 } from 'three'
import { BirchTree_1 } from '../quaternius/nature_pack'
import { PlayerController } from './PlayerController'
import { Trex } from './Trex'

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
        return <BirchTree_1 key={index} position={pos} scale={new Vector3(5, 5, 5)} />
      })}
    </>
  )
}
export function Plane() {
  return (
    <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1000, 1000, 1000]}>
      <planeGeometry />
      <meshBasicMaterial color='#7EC850' side={DoubleSide} />
    </mesh>
  )
}

export default function ThirdPersonDemo() {
  return (
    <>
      <Sky azimuth={1} inclination={0.6} distance={1000} />

      <Physics>
        <PlayerController>
          <Trex withAnimations={true} />
        </PlayerController>
        <Trees />
        <Plane />
        <PointerLockControls />
      </Physics>
    </>
  )
}
