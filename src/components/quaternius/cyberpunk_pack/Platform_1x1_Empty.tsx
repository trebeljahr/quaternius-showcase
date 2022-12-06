/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Platform_1x1_Empty_1: THREE.Mesh
    Platform_1x1_Empty_2: THREE.Mesh
    Platform_1x1_Empty_3: THREE.Mesh
  }
  materials: {
    LightGrey: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
    Texture_Signs: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Platform_1x1_Empty.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Platform_1x1_Empty_1.geometry} material={materials.LightGrey} />
        <mesh geometry={nodes.Platform_1x1_Empty_2.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Platform_1x1_Empty_3.geometry} material={materials.Texture_Signs} />
      </group>
    </group>
  )
}

useGLTF.preload('/Platform_1x1_Empty.glb')
