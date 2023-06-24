/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Houses_SecondAge_2_Level1_1: THREE.Mesh
    Houses_SecondAge_2_Level1_2: THREE.Mesh
    Houses_SecondAge_2_Level1_3: THREE.Mesh
    Houses_SecondAge_2_Level1_4: THREE.Mesh
    Houses_SecondAge_2_Level1_5: THREE.Mesh
  }
  materials: {
    Main: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    Wood_Light: THREE.MeshStandardMaterial
    Walls: THREE.MeshStandardMaterial
    Stone: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/glb/real_time_strategy_pack/Houses_SecondAge_2_Level1.glb',
  ) as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Houses_SecondAge_2_Level1_1.geometry} material={materials.Main} />
        <mesh geometry={nodes.Houses_SecondAge_2_Level1_2.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Houses_SecondAge_2_Level1_3.geometry} material={materials.Wood_Light} />
        <mesh geometry={nodes.Houses_SecondAge_2_Level1_4.geometry} material={materials.Walls} />
        <mesh geometry={nodes.Houses_SecondAge_2_Level1_5.geometry} material={materials.Stone} />
      </group>
    </group>
  )
}
