import { Box, PointerLockControls, Sky } from '@react-three/drei'
import { InstancedRigidBodies, InstancedRigidBodyApi, Physics, RigidBody } from '@react-three/rapier'
import { useEffect, useRef } from 'react'
import { DoubleSide, Euler, InstancedMesh, Vector3 } from 'three'
import { BirchTree_1 } from '../quaternius/nature_pack'
import { useTree1 } from '../quaternius/nature_pack/CommonTree_1'
import { FlyingPlayer } from './FlyingPlayer'
import { ImprovedPlayerController, PlayerController } from './PlayerController'
import { Trex } from './Trex'

function random(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function Trees() {
  const positions = new Array(100).fill(0).map(() => new Vector3(random(-200, 200), 0, random(-200, 200)))
  return (
    <>
      {positions.map((pos, index) => {
        console.log(pos)
        return <BirchTree_1 key={index} position={pos} scale={new Vector3(5, 5, 5)} />
      })}
    </>
  )
}

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

export const InstancedTreesWithPhysics = () => {
  const api = useRef<InstancedRigidBodyApi>(null)
  useEffect(() => {
    if (api.current) {
      api.current.forEach((body) => {
        // body.applyImpulse({
        //   x: -Math.random() * 5,
        //   y: Math.random() * 5,
        //   z: -Math.random() * 5,
        // })
        console.log(body)
        console.log(body.translation())
      })
    }
  }, [])
  // const ref = useRef<InstancedMesh>(null)

  const { nodes, materials } = useTree1()
  const COUNT = 10

  console.log(nodes, materials)

  return (
    <group scale={10} rotation={new Euler(Math.PI / 2, 0, 0)}>
      <InstancedRigidBodies
        ref={api}
        type='fixed'
        positions={Array.from({ length: COUNT }, () => [random(-1000, 1000), random(-1000, 1000), 0])}
        rotations={Array.from({ length: COUNT }, () => [0, 0, 0])}
        scales={Array.from({ length: COUNT }, () => [100, 100, 100])}
        colliders='hull'>
        <instancedMesh args={[nodes.CommonTree_1_1.geometry, materials.Wood, COUNT]} />
        <instancedMesh args={[nodes.CommonTree_1_2.geometry, materials.Green, COUNT]} />
      </InstancedRigidBodies>
    </group>
  )
}

export default function ThirdPersonDemo() {
  return (
    <>
      <Sky azimuth={1} inclination={0.6} distance={1000} />

      <Physics colliders='hull'>
        {/* <PlayerController> */}
        <ImprovedPlayerController>
          <Trex withAnimations={true} />
        </ImprovedPlayerController>
        {/* </PlayerController> */}
        {/* <FlyingPlayer /> */}
        <Floor />
        <InstancedTreesWithPhysics />
        {/* <Trees /> */}
        {/* <Plane /> */}
        {/* <PointerLockControls /> */}
      </Physics>
    </>
  )
}
