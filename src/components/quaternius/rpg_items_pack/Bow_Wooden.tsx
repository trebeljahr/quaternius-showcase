/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Bow_Wooden_1: THREE.Mesh
    Bow_Wooden_2: THREE.Mesh
    Bow_Wooden_3: THREE.Mesh
  }
  materials: {
    DarkWood: THREE.MeshStandardMaterial
    LightWood: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/rpg_items_pack/Bow_Wooden.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Bow_Wooden_1.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Bow_Wooden_2.geometry} material={materials.LightWood} />
        <mesh geometry={nodes.Bow_Wooden_3.geometry} material={materials.White} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/rpg_items_pack/Bow_Wooden.glb')
