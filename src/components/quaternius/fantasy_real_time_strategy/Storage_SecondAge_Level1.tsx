/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Storage_SecondAge_Level1_1: THREE.Mesh
    Storage_SecondAge_Level1_2: THREE.Mesh
    Storage_SecondAge_Level1_3: THREE.Mesh
    Storage_SecondAge_Level1_4: THREE.Mesh
    Storage_SecondAge_Level1_5: THREE.Mesh
    Storage_SecondAge_Level1_6: THREE.Mesh
    Storage_SecondAge_Level1_7: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    Wood_Light: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    Walls: THREE.MeshStandardMaterial
    Stone: THREE.MeshStandardMaterial
    Stone_Light: THREE.MeshStandardMaterial
    Metal_Light: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/glb/real_time_strategy_pack/Storage_SecondAge_Level1.glb',
  ) as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Storage_SecondAge_Level1_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Storage_SecondAge_Level1_2.geometry} material={materials.Wood_Light} />
        <mesh geometry={nodes.Storage_SecondAge_Level1_3.geometry} material={materials.Main} />
        <mesh geometry={nodes.Storage_SecondAge_Level1_4.geometry} material={materials.Walls} />
        <mesh geometry={nodes.Storage_SecondAge_Level1_5.geometry} material={materials.Stone} />
        <mesh geometry={nodes.Storage_SecondAge_Level1_6.geometry} material={materials.Stone_Light} />
        <mesh geometry={nodes.Storage_SecondAge_Level1_7.geometry} material={materials.Metal_Light} />
      </group>
    </group>
  )
}
