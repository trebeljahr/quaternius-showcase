import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Rock_Large_1: THREE.Mesh
  }
  materials: {
    Atlas: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/ultimate_space_pack/Rock_Large_1-transformed.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Rock_Large_1.geometry} material={materials.Atlas} />
    </group>
  )
}

useGLTF.preload('/glb/ultimate_space_pack/Rock_Large_1-transformed.glb')
