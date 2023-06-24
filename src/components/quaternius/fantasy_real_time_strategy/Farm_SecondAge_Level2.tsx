/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Farm_SecondAge_Level2_1: THREE.Mesh
    Farm_SecondAge_Level2_2: THREE.Mesh
    Farm_SecondAge_Level2_3: THREE.Mesh
    Farm_SecondAge_Level2_4: THREE.Mesh
    Farm_SecondAge_Level2_5: THREE.Mesh
    Farm_SecondAge_Level2_6: THREE.Mesh
    Farm_SecondAge_Level2_7: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    Wood_Light: THREE.MeshStandardMaterial
    Dirt: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    Walls: THREE.MeshStandardMaterial
    Stone: THREE.MeshStandardMaterial
    Stone_Light: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/glb/real_time_strategy_pack/Farm_SecondAge_Level2.glb',
  ) as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Farm_SecondAge_Level2_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Farm_SecondAge_Level2_2.geometry} material={materials.Wood_Light} />
        <mesh geometry={nodes.Farm_SecondAge_Level2_3.geometry} material={materials.Dirt} />
        <mesh geometry={nodes.Farm_SecondAge_Level2_4.geometry} material={materials.Main} />
        <mesh geometry={nodes.Farm_SecondAge_Level2_5.geometry} material={materials.Walls} />
        <mesh geometry={nodes.Farm_SecondAge_Level2_6.geometry} material={materials.Stone} />
        <mesh geometry={nodes.Farm_SecondAge_Level2_7.geometry} material={materials.Stone_Light} />
      </group>
    </group>
  )
}
