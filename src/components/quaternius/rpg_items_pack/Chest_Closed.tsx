/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Chest_Closed_1: THREE.Mesh
    Chest_Closed_2: THREE.Mesh
    Chest_Closed_3: THREE.Mesh
  }
  materials: {
    DarkMetal: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Chest_Closed.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Chest_Closed_1.geometry} material={materials.DarkMetal} />
        <mesh geometry={nodes.Chest_Closed_2.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Chest_Closed_3.geometry} material={materials.Metal} />
      </group>
    </group>
  )
}

useGLTF.preload('/Chest_Closed.glb')
