/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Book3_Closed_1: THREE.Mesh
    Book3_Closed_2: THREE.Mesh
    Book3_Closed_3: THREE.Mesh
    Book3_Closed_4: THREE.Mesh
  }
  materials: {
    DarkBrown: THREE.MeshStandardMaterial
    Beige: THREE.MeshStandardMaterial
    Gold: THREE.MeshStandardMaterial
    Brown: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/rpg_items_pack/Book3_Closed.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Book3_Closed_1.geometry} material={materials.DarkBrown} />
        <mesh geometry={nodes.Book3_Closed_2.geometry} material={materials.Beige} />
        <mesh geometry={nodes.Book3_Closed_3.geometry} material={materials.Gold} />
        <mesh geometry={nodes.Book3_Closed_4.geometry} material={materials.Brown} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/rpg_items_pack/Book3_Closed.glb')
