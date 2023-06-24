/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Fence_1_1: THREE.Mesh
    Fence_1_2: THREE.Mesh
  }
  materials: {
    Wood_Light: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/platformer_game_pack/Fence_1.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Fence_1_1.geometry} material={materials.Wood_Light} />
        <mesh geometry={nodes.Fence_1_2.geometry} material={materials.Wood} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/platformer_game_pack/Fence_1.glb')
