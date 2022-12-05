import { Ocean } from './Ocean'
import { Physics } from '@react-three/rapier'
import { Player } from './Player'
import { FollowingTrex } from './Trex'
import { PointerLockControls } from '@react-three/drei'

export default function FreeMovement() {
  return (
    <>
      <Physics>
        <Player />
      </Physics>
      <PointerLockControls />
      <FollowingTrex />

      <Ocean />
    </>
  )
}
