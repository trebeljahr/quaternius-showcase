import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Wheel_1: THREE.Mesh
  }
  materials: {
    ['Atlas.001']: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/ultimate_space_pack/Rover_2-transformed.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Wheel_1.geometry} material={materials['Atlas.001']} position={[1.8, 0.53, -1.76]} />
    </group>
  )
}

useGLTF.preload('/glb/ultimate_space_pack/Rover_2-transformed.glb')
