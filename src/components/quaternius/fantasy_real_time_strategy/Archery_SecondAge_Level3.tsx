/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Archery_SecondAge_Level3_1: THREE.Mesh
    Archery_SecondAge_Level3_2: THREE.Mesh
    Archery_SecondAge_Level3_3: THREE.Mesh
    Archery_SecondAge_Level3_4: THREE.Mesh
    Archery_SecondAge_Level3_5: THREE.Mesh
    Archery_SecondAge_Level3_6: THREE.Mesh
    Archery_SecondAge_Level3_7: THREE.Mesh
    Archery_SecondAge_Level3_8: THREE.Mesh
    Archery_SecondAge_Level3_9: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    Wood_Light: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    Walls: THREE.MeshStandardMaterial
    Stone: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
    Stone_Light: THREE.MeshStandardMaterial
    Metal_Light: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/glb/real_time_strategy_pack/Archery_SecondAge_Level3.glb',
  ) as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Archery_SecondAge_Level3_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Archery_SecondAge_Level3_2.geometry} material={materials.Wood_Light} />
        <mesh geometry={nodes.Archery_SecondAge_Level3_3.geometry} material={materials.Main} />
        <mesh geometry={nodes.Archery_SecondAge_Level3_4.geometry} material={materials.Walls} />
        <mesh geometry={nodes.Archery_SecondAge_Level3_5.geometry} material={materials.Stone} />
        <mesh geometry={nodes.Archery_SecondAge_Level3_6.geometry} material={materials.White} />
        <mesh geometry={nodes.Archery_SecondAge_Level3_7.geometry} material={materials.Red} />
        <mesh geometry={nodes.Archery_SecondAge_Level3_8.geometry} material={materials.Stone_Light} />
        <mesh geometry={nodes.Archery_SecondAge_Level3_9.geometry} material={materials.Metal_Light} />
      </group>
    </group>
  )
}
