/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    BirchTree_4_1: THREE.Mesh
    BirchTree_4_2: THREE.Mesh
  }
  materials: {
    BirchTree_Bark: THREE.MeshStandardMaterial
    BirchTree_Leaves: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/BirchTree_4.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.BirchTree_4_1.geometry} material={materials.BirchTree_Bark} />
        <mesh geometry={nodes.BirchTree_4_2.geometry} material={materials.BirchTree_Leaves} />
      </group>
    </group>
  )
}

useGLTF.preload('/BirchTree_4.glb')
