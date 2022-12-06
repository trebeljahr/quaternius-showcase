/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    TowerHouse_FirstAge_1: THREE.Mesh
    TowerHouse_FirstAge_2: THREE.Mesh
    TowerHouse_FirstAge_3: THREE.Mesh
    TowerHouse_FirstAge_4: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    Wood_Light: THREE.MeshStandardMaterial
    Stone: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/real_time_strategy_pack/TowerHouse_FirstAge.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.TowerHouse_FirstAge_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.TowerHouse_FirstAge_2.geometry} material={materials.Wood_Light} />
        <mesh geometry={nodes.TowerHouse_FirstAge_3.geometry} material={materials.Stone} />
        <mesh geometry={nodes.TowerHouse_FirstAge_4.geometry} material={materials.Main} />
      </group>
    </group>
  )
}