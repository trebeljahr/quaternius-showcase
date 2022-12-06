import { FlyingPlayer } from '@/components/canvas/FlyingPlayer'
import { Ocean } from '@/components/canvas/Ocean'
import { PointerLockControls } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import dynamic from 'next/dynamic'

const Ship = dynamic(() => import('@/components/canvas/Ship'), { ssr: false })

export default function Page() {
  return <></>
}

Page.canvas = () => (
  <>
    <Physics>
      <FlyingPlayer />
    </Physics>
    <PointerLockControls />
    <Ship />
    <Ocean />
  </>
)
