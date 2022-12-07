/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Doors_RoundArch_Covered_1: THREE.Mesh
    Doors_RoundArch_Covered_2: THREE.Mesh
    Doors_RoundArch_Covered_3: THREE.Mesh
    Doors_RoundArch_Covered_4: THREE.Mesh
  }
  materials: {
    DarkWood: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    Metal_Light: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_ruins/Doors_RoundArch_Covered.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Doors_RoundArch_Covered_1.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Doors_RoundArch_Covered_2.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Doors_RoundArch_Covered_3.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Doors_RoundArch_Covered_4.geometry} material={materials.Metal_Light} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_ruins/Doors_RoundArch_Covered.glb')
