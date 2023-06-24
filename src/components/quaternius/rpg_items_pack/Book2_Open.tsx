/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Book2_Open_1: THREE.Mesh
    Book2_Open_2: THREE.Mesh
    Book2_Open_3: THREE.Mesh
  }
  materials: {
    Beige: THREE.MeshStandardMaterial
    DarkRed: THREE.MeshStandardMaterial
    Golden: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/rpg_items_pack/Book2_Open.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Book2_Open_1.geometry} material={materials.Beige} />
        <mesh geometry={nodes.Book2_Open_2.geometry} material={materials.DarkRed} />
        <mesh geometry={nodes.Book2_Open_3.geometry} material={materials.Golden} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/rpg_items_pack/Book2_Open.glb')
