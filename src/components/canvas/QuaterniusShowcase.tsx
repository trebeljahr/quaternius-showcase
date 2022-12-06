import { Physics } from '@react-three/rapier'
import { Vector3 } from 'three'
import * as NatureModels from '../quaternius/nature_pack'
import * as CropModels from '../quaternius/crops_pack'
import * as RealTimeStrategyModels from '../quaternius/fantasy_real_time_strategy'

import { FlyingPlayer } from './FlyingPlayer'
import { Plane } from './ThirdPersonDemo'

export default function QuaterniusShowcase() {
  const AllModels = [
    ...Object.values(NatureModels),
    ...Object.values(CropModels),
    ...Object.values(RealTimeStrategyModels),
  ]
  return (
    <>
      <Physics>
        <FlyingPlayer />
      </Physics>
      <Plane />
      {Object.values(AllModels).map((Component, i) => {
        const rowSize = 10

        return (
          <Component key={i} position={new Vector3(((i % rowSize) + 1) * 3, 0, (Math.floor(i / rowSize) + 1) * 3)} />
        )
      })}
    </>
  )
}