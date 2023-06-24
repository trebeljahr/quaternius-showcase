/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Houses_FirstAge_3_Level1_1: THREE.Mesh
    Houses_FirstAge_3_Level1_2: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    Wood_Light: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/glb/real_time_strategy_pack/Houses_FirstAge_3_Level1.glb',
  ) as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Houses_FirstAge_3_Level1_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Houses_FirstAge_3_Level1_2.geometry} material={materials.Wood_Light} />
      </group>
    </group>
  )
}
