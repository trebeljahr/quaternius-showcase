/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Birch_4_1: THREE.Mesh
    Birch_4_2: THREE.Mesh
  }
  materials: {
    Birch_Bark: THREE.MeshStandardMaterial
    Birch_Leaves: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/stylized_trees/Birch_4.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Birch_4_1.geometry} material={materials.Birch_Bark} />
        <mesh geometry={nodes.Birch_4_2.geometry} material={materials.Birch_Leaves} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/stylized_trees/Birch_4.glb')
