/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Potion3_1: THREE.Mesh
    Potion3_2: THREE.Mesh
  }
  materials: {
    Grey: THREE.MeshStandardMaterial
    Ice: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Potion3.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Potion3_1.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Potion3_2.geometry} material={materials.Ice} />
      </group>
    </group>
  )
}

useGLTF.preload('/Potion3.glb')
