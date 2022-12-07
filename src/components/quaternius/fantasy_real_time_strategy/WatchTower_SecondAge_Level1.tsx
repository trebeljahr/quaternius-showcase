/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    WatchTower_SecondAge_Level1_1: THREE.Mesh
    WatchTower_SecondAge_Level1_2: THREE.Mesh
    WatchTower_SecondAge_Level1_3: THREE.Mesh
    WatchTower_SecondAge_Level1_4: THREE.Mesh
    WatchTower_SecondAge_Level1_5: THREE.Mesh
  }
  materials: {
    Stone_Light: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    Stone: THREE.MeshStandardMaterial
    Wood_Light: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/glb/real_time_strategy_pack/WatchTower_SecondAge_Level1.glb',
  ) as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.WatchTower_SecondAge_Level1_1.geometry} material={materials.Stone_Light} />
        <mesh geometry={nodes.WatchTower_SecondAge_Level1_2.geometry} material={materials.Main} />
        <mesh geometry={nodes.WatchTower_SecondAge_Level1_3.geometry} material={materials.Stone} />
        <mesh geometry={nodes.WatchTower_SecondAge_Level1_4.geometry} material={materials.Wood_Light} />
        <mesh geometry={nodes.WatchTower_SecondAge_Level1_5.geometry} material={materials.Wood} />
      </group>
    </group>
  )
}
