import { Trex2 } from './Trex2'
import { BirchTree } from './BirchTree_5'
import { Ocean } from './Ocean'
import { useFrame, useThree } from '@react-three/fiber'

export default function Logo() {
  return (
    <>
      {/* <BirchTree /> */}
      <Trex2 />
      <Ocean />
    </>
  )
}
