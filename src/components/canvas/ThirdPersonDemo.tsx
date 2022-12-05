import { Physics } from '@react-three/rapier'
import { Player } from './Player'
import { Trex } from './Trex'

export default function ThirdPersonDemo() {
  return (
    <>
      <Physics>
        <Player>
          <Trex />
        </Player>
      </Physics>
    </>
  )
}
