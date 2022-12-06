import { Physics } from '@react-three/rapier'
import { Vector3 } from 'three'
import * as Models from '../quaternius/nature_pack'
import { FlyingPlayer } from './FlyingPlayer'
import { Plane } from './ThirdPersonDemo'

export default function QuaterniusShowcase() {
  return (
    <>
      <Physics>
        <FlyingPlayer />
      </Physics>
      <Plane />
      {Object.values(Models).map((Component, i) => {
        const rowSize = 10
        return <Component key={i} position={new Vector3((i % rowSize) * 3, 0, Math.floor(i / rowSize) * 3)} />
      })}
    </>
  )
}
