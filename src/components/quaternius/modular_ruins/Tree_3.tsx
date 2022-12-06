/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Tree_3_1: THREE.Mesh
    Tree_3_2: THREE.Mesh
  }
  materials: {
    Bark: THREE.MeshStandardMaterial
    Texture_Leaves: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Tree_3.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Tree_3_1.geometry} material={materials.Bark} />
        <mesh geometry={nodes.Tree_3_2.geometry} material={materials.Texture_Leaves} />
      </group>
    </group>
  )
}

useGLTF.preload('/Tree_3.glb')
