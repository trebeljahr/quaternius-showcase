import { Ocean } from './Ocean'
import { Physics } from '@react-three/rapier'
import { FlyingPlayer } from './FlyingPlayer'
import { FollowingTrex } from './Trex'
import { PointerLockControls } from '@react-three/drei'

export default function FreeMovement() {
  return (
    <>
      <Physics>
        <FlyingPlayer />
      </Physics>
      <PointerLockControls />

      <FollowingTrex />

      <Ocean />
    </>
  )
}
