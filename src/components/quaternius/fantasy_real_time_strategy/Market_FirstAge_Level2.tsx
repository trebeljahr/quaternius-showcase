/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Market_FirstAge_Level2_1: THREE.Mesh
    Market_FirstAge_Level2_2: THREE.Mesh
    Market_FirstAge_Level2_3: THREE.Mesh
    Market_FirstAge_Level2_4: THREE.Mesh
    Market_FirstAge_Level2_5: THREE.Mesh
    Market_FirstAge_Level2_6: THREE.Mesh
    Market_FirstAge_Level2_7: THREE.Mesh
  }
  materials: {
    Green: THREE.MeshStandardMaterial
    Yellow: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    Wood_Light: THREE.MeshStandardMaterial
    Gold: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/glb/real_time_strategy_pack/Market_FirstAge_Level2.glb',
  ) as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Market_FirstAge_Level2_1.geometry} material={materials.Green} />
        <mesh geometry={nodes.Market_FirstAge_Level2_2.geometry} material={materials.Yellow} />
        <mesh geometry={nodes.Market_FirstAge_Level2_3.geometry} material={materials.Red} />
        <mesh geometry={nodes.Market_FirstAge_Level2_4.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Market_FirstAge_Level2_5.geometry} material={materials.Wood_Light} />
        <mesh geometry={nodes.Market_FirstAge_Level2_6.geometry} material={materials.Gold} />
        <mesh geometry={nodes.Market_FirstAge_Level2_7.geometry} material={materials.White} />
      </group>
    </group>
  )
}
