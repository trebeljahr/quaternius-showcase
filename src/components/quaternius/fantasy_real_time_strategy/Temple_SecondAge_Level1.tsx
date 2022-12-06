/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Temple_SecondAge_Level1_1: THREE.Mesh
    Temple_SecondAge_Level1_2: THREE.Mesh
    Temple_SecondAge_Level1_3: THREE.Mesh
  }
  materials: {
    Stone: THREE.MeshStandardMaterial
    Walls: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Temple_SecondAge_Level1.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Temple_SecondAge_Level1_1.geometry} material={materials.Stone} />
        <mesh geometry={nodes.Temple_SecondAge_Level1_2.geometry} material={materials.Walls} />
        <mesh geometry={nodes.Temple_SecondAge_Level1_3.geometry} material={materials.Main} />
      </group>
    </group>
  )
}
