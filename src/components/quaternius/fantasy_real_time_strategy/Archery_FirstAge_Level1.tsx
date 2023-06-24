/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Archery_FirstAge_Level1_1: THREE.Mesh
    Archery_FirstAge_Level1_2: THREE.Mesh
    Archery_FirstAge_Level1_3: THREE.Mesh
    Archery_FirstAge_Level1_4: THREE.Mesh
    Archery_FirstAge_Level1_5: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    Wood_Light: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/glb/real_time_strategy_pack/Archery_FirstAge_Level1.glb',
  ) as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Archery_FirstAge_Level1_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Archery_FirstAge_Level1_2.geometry} material={materials.Main} />
        <mesh geometry={nodes.Archery_FirstAge_Level1_3.geometry} material={materials.White} />
        <mesh geometry={nodes.Archery_FirstAge_Level1_4.geometry} material={materials.Wood_Light} />
        <mesh geometry={nodes.Archery_FirstAge_Level1_5.geometry} material={materials.Red} />
      </group>
    </group>
  )
}
