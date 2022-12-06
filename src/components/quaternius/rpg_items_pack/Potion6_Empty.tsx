/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Potion6_Empty_1: THREE.Mesh
    Potion6_Empty_2: THREE.Mesh
  }
  materials: {
    Glass: THREE.MeshStandardMaterial
    Brown: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Potion6_Empty.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Potion6_Empty_1.geometry} material={materials.Glass} />
        <mesh geometry={nodes.Potion6_Empty_2.geometry} material={materials.Brown} />
      </group>
    </group>
  )
}

useGLTF.preload('/Potion6_Empty.glb')
