/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    PineTree_4_1: THREE.Mesh
    PineTree_4_2: THREE.Mesh
  }
  materials: {
    PineTree_Bark: THREE.MeshStandardMaterial
    PineTree_Leaves: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/PineTree_4.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.PineTree_4_1.geometry} material={materials.PineTree_Bark} />
        <mesh geometry={nodes.PineTree_4_2.geometry} material={materials.PineTree_Leaves} />
      </group>
    </group>
  )
}

useGLTF.preload('/PineTree_4.glb')
