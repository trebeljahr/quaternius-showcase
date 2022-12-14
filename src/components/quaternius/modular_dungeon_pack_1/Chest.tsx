/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Chest_Base_1: THREE.Mesh
    Chest_Base_2: THREE.Mesh
    Chest_Base_3: THREE.Mesh
    Chest_Top_1: THREE.Mesh
    Chest_Top_2: THREE.Mesh
  }
  materials: {
    DarkWood: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_dungeon_1/Chest.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Chest_Base_1.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Chest_Base_2.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Chest_Base_3.geometry} material={materials.Metal} />
      </group>
      <group position={[0, 0.52, -0.35]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Chest_Top_1.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Chest_Top_2.geometry} material={materials.Wood} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_dungeon_1/Chest.glb')
