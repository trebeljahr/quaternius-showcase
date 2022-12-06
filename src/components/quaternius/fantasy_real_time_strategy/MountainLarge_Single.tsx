/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    MountainLarge_Single_1: THREE.Mesh
    MountainLarge_Single_2: THREE.Mesh
    MountainLarge_Single_3: THREE.Mesh
  }
  materials: {
    Stone: THREE.MeshStandardMaterial
    Snow: THREE.MeshStandardMaterial
    Dirt: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/MountainLarge_Single.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.MountainLarge_Single_1.geometry} material={materials.Stone} />
        <mesh geometry={nodes.MountainLarge_Single_2.geometry} material={materials.Snow} />
        <mesh geometry={nodes.MountainLarge_Single_3.geometry} material={materials.Dirt} />
      </group>
    </group>
  )
}
