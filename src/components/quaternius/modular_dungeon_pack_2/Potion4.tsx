/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Potion4_1: THREE.Mesh
    Potion4_2: THREE.Mesh
    Potion4_3: THREE.Mesh
  }
  materials: {
    Glass: THREE.MeshStandardMaterial
    Cork: THREE.MeshStandardMaterial
    Liquid: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_dungeon_pack/Potion4.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Potion4_1.geometry} material={materials.Glass} />
        <mesh geometry={nodes.Potion4_2.geometry} material={materials.Cork} />
        <mesh geometry={nodes.Potion4_3.geometry} material={materials.Liquid} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_dungeon_pack/Potion4.glb')
