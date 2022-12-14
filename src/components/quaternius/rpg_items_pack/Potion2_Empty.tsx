/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Potion2_Empty_1: THREE.Mesh
    Potion2_Empty_2: THREE.Mesh
  }
  materials: {
    Glass: THREE.MeshStandardMaterial
    Brown: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/rpg_items_pack/Potion2_Empty.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Potion2_Empty_1.geometry} material={materials.Glass} />
        <mesh geometry={nodes.Potion2_Empty_2.geometry} material={materials.Brown} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/rpg_items_pack/Potion2_Empty.glb')
