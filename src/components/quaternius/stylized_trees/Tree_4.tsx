/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Tree_4_1: THREE.Mesh
    Tree_4_2: THREE.Mesh
  }
  materials: {
    Bark: THREE.MeshStandardMaterial
    Tree_Leaves: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/stylized_trees/Tree_4.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Tree_4_1.geometry} material={materials.Bark} />
        <mesh geometry={nodes.Tree_4_2.geometry} material={materials.Tree_Leaves} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/stylized_trees/Tree_4.glb')
