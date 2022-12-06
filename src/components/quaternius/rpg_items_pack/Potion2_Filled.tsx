/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Potion2_Filled_1: THREE.Mesh
    Potion2_Filled_2: THREE.Mesh
    Potion2_Filled_3: THREE.Mesh
  }
  materials: {
    Glass: THREE.MeshStandardMaterial
    Liquid_Yellow: THREE.MeshStandardMaterial
    Brown: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Potion2_Filled.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Potion2_Filled_1.geometry} material={materials.Glass} />
        <mesh geometry={nodes.Potion2_Filled_2.geometry} material={materials.Liquid_Yellow} />
        <mesh geometry={nodes.Potion2_Filled_3.geometry} material={materials.Brown} />
      </group>
    </group>
  )
}

useGLTF.preload('/Potion2_Filled.glb')
