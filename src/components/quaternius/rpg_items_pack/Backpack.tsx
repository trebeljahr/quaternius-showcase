/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Backpack_1: THREE.Mesh
    Backpack_2: THREE.Mesh
    Backpack_3: THREE.Mesh
  }
  materials: {
    DarkBrown: THREE.MeshStandardMaterial
    Brown: THREE.MeshStandardMaterial
    Gold: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/rpg_items_pack/Backpack.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Backpack_1.geometry} material={materials.DarkBrown} />
        <mesh geometry={nodes.Backpack_2.geometry} material={materials.Brown} />
        <mesh geometry={nodes.Backpack_3.geometry} material={materials.Gold} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/rpg_items_pack/Backpack.glb')
