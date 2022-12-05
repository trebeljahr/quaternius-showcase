import { Ocean } from './Ocean'
import { Physics } from '@react-three/rapier'
import { FlyingPlayer } from './FlyingPlayer'
import { FollowingTrex } from './Trex'

export default function FreeMovement() {
  return (
    <>
      <Physics>
        <FlyingPlayer />
      </Physics>
      <FollowingTrex />

      <Ocean />
    </>
  )
}
