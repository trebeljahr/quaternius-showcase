/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Floor_Tree_1: THREE.Mesh
    Floor_Tree_2: THREE.Mesh
    Floor_Tree_3: THREE.Mesh
    Floor_Tree_4: THREE.Mesh
  }
  materials: {
    Highlights: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    Main2: THREE.MeshStandardMaterial
    Dirt: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_ruins/Floor_Tree.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 5.97]}>
        <mesh geometry={nodes.Floor_Tree_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Floor_Tree_2.geometry} material={materials.Main} />
        <mesh geometry={nodes.Floor_Tree_3.geometry} material={materials.Main2} />
        <mesh geometry={nodes.Floor_Tree_4.geometry} material={materials.Dirt} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_ruins/Floor_Tree.glb')
