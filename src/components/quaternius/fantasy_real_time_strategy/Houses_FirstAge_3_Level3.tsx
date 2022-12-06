/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Houses_FirstAge_3_Level3_1: THREE.Mesh
    Houses_FirstAge_3_Level3_2: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    Wood_Light: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Houses_FirstAge_3_Level3.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Houses_FirstAge_3_Level3_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Houses_FirstAge_3_Level3_2.geometry} material={materials.Wood_Light} />
      </group>
    </group>
  )
}
