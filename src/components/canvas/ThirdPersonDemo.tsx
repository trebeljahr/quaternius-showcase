import { Box, Sky } from '@react-three/drei'
import { Debug, Physics, RigidBody } from '@react-three/rapier'
import { DoubleSide } from 'three'
import { ImprovedPlayerController } from './PlayerController'
import { InstancedTreesWithPhysics } from './TreeStuff'

export const Floor = () => {
  return (
    <RigidBody type='fixed' colliders='cuboid'>
      <Box position={[0, -5, 0]} scale={[200, 10, 200]} rotation={[0, 0, 0]} receiveShadow>
        <meshBasicMaterial color='#7EC850' />
      </Box>
    </RigidBody>
  )
}

export function Plane() {
  return (
    <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1000, 1000, 1000]}>
      <planeGeometry />
      <meshBasicMaterial color='#7EC850' side={DoubleSide} />
    </mesh>
  )
}

export default function ThirdPersonDemo() {
  return (
    <>
      <Sky azimuth={1} inclination={0.6} distance={1000} />

      <Physics colliders='hull'>
        <ImprovedPlayerController />
        <Debug />
        <Floor />
        <InstancedTreesWithPhysics />
        {/* <Trees /> */}
        {/* <Plane /> */}
      </Physics>
    </>
  )
}
