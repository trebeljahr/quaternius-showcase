import { FlyingPlayer } from '@/components/canvas/FlyingPlayer'
import { Ocean } from '@/components/canvas/Ocean'
import { PointerLockControls, Sky } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import dynamic from 'next/dynamic'

const Ship = dynamic(() => import('@/components/canvas/Ship'), { ssr: false })

export default function Page() {
  return <></>
}

Page.canvas = () => (
  <>
    <Sky azimuth={1} inclination={0.6} distance={1000} />
    <Physics>
      <FlyingPlayer />
    </Physics>
    <PointerLockControls />
    <Ship />
    <Ocean />
  </>
)
