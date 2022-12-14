/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Archery_FirstAge_Level2_1: THREE.Mesh
    Archery_FirstAge_Level2_2: THREE.Mesh
    Archery_FirstAge_Level2_3: THREE.Mesh
    Archery_FirstAge_Level2_4: THREE.Mesh
    Archery_FirstAge_Level2_5: THREE.Mesh
    Archery_FirstAge_Level2_6: THREE.Mesh
  }
  materials: {
    Wood_Light: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    Stone: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/glb/real_time_strategy_pack/Archery_FirstAge_Level2.glb',
  ) as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Archery_FirstAge_Level2_1.geometry} material={materials.Wood_Light} />
        <mesh geometry={nodes.Archery_FirstAge_Level2_2.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Archery_FirstAge_Level2_3.geometry} material={materials.Stone} />
        <mesh geometry={nodes.Archery_FirstAge_Level2_4.geometry} material={materials.White} />
        <mesh geometry={nodes.Archery_FirstAge_Level2_5.geometry} material={materials.Red} />
        <mesh geometry={nodes.Archery_FirstAge_Level2_6.geometry} material={materials.Main} />
      </group>
    </group>
  )
}
