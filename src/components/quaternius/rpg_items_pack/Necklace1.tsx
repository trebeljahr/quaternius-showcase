/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Necklace1_1: THREE.Mesh
    Necklace1_2: THREE.Mesh
    Necklace1_3: THREE.Mesh
  }
  materials: {
    DarkBrown: THREE.MeshStandardMaterial
    Lilac: THREE.MeshStandardMaterial
    Golden: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/rpg_items_pack/Necklace1.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Necklace1_1.geometry} material={materials.DarkBrown} />
        <mesh geometry={nodes.Necklace1_2.geometry} material={materials.Lilac} />
        <mesh geometry={nodes.Necklace1_3.geometry} material={materials.Golden} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/rpg_items_pack/Necklace1.glb')
