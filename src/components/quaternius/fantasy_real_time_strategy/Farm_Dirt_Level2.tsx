/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Farm_Dirt_Level2_1: THREE.Mesh
    Farm_Dirt_Level2_2: THREE.Mesh
  }
  materials: {
    Dirt: THREE.MeshStandardMaterial
    Green: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/real_time_strategy_pack/Farm_Dirt_Level2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Farm_Dirt_Level2_1.geometry} material={materials.Dirt} />
        <mesh geometry={nodes.Farm_Dirt_Level2_2.geometry} material={materials.Green} />
      </group>
    </group>
  )
}
