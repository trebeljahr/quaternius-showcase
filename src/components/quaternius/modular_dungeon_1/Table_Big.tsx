/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Table_Big_1: THREE.Mesh
    Table_Big_2: THREE.Mesh
    Table_Big_3: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    DarkMetal: THREE.MeshStandardMaterial
    DarkWood: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Table_Big.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Table_Big_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Table_Big_2.geometry} material={materials.DarkMetal} />
        <mesh geometry={nodes.Table_Big_3.geometry} material={materials.DarkWood} />
      </group>
    </group>
  )
}

useGLTF.preload('/Table_Big.glb')