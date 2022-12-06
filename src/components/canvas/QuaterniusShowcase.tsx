import { Physics } from '@react-three/rapier'
import { Vector3 } from 'three'
import * as AllModels from '../quaternius'

import { FlyingPlayer } from './FlyingPlayer'
import { Plane } from './ThirdPersonDemo'
import { useControls } from 'leva'
import { PointerLockControls } from '@react-three/drei'
import { useEffect } from 'react'

export default function QuaterniusShowcase() {
  // const [selectedPack, setSelectedPack] = useState<keyof typeof AllModels>('animals_pack')
  const { selectedPack } = useControls({ selectedPack: { options: AllModels } })
  console.log(selectedPack)
  useEffect(() => {
    document.getElementById('selectedPack')?.blur()
  }, [selectedPack])

  // const AllModels = [
  //   ...Object.values(NatureModels),
  //   ...Object.values(CropModels),
  //   ...Object.values(RealTimeStrategyModels),
  // ]

  // console.log(Object.keys())
  return (
    <>
      <Physics>
        <FlyingPlayer />
      </Physics>
      <PointerLockControls />

      <Plane />
      {Object.values(selectedPack).map((Component, i) => {
        const rowSize = 10

        return (
          <Component key={i} position={new Vector3(((i % rowSize) + 1) * 3, 0, (Math.floor(i / rowSize) + 1) * 3)} />
        )
      })}
    </>
  )
}
