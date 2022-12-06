/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Grip_SMG_1_1: THREE.Mesh
    Grip_SMG_1_2: THREE.Mesh
  }
  materials: {
    Black: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Grip_SMG_1.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Grip_SMG_1_1.geometry} material={materials.Black} />
        <mesh geometry={nodes.Grip_SMG_1_2.geometry} material={materials.Grey} />
      </group>
    </group>
  )
}

useGLTF.preload('/Grip_SMG_1.glb')