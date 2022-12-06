/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Pine_4_1: THREE.Mesh
    Pine_4_2: THREE.Mesh
  }
  materials: {
    Bark: THREE.MeshStandardMaterial
    Pine_Leaves: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Pine_4.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={74.79}>
        <mesh geometry={nodes.Pine_4_1.geometry} material={materials.Bark} />
        <mesh geometry={nodes.Pine_4_2.geometry} material={materials.Pine_Leaves} />
      </group>
    </group>
  )
}

useGLTF.preload('/Pine_4.glb')
