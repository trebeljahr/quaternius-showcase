import { Physics } from '@react-three/rapier'
import { FlyingPlayer } from './FlyingPlayer'
import { FollowingTrex } from './Trex'
import { PointerLockControls, Sky } from '@react-three/drei'
import { Plane } from './ThirdPersonDemo'
import { Trees } from './TreeStuff'

export default function FreeMovement() {
  return (
    <>
      <Sky azimuth={1} inclination={0.6} distance={1000} />

      <Physics>
        <FlyingPlayer />
      </Physics>
      <PointerLockControls />

      <FollowingTrex />

      <Trees />
      <Plane />
    </>
  )
}
