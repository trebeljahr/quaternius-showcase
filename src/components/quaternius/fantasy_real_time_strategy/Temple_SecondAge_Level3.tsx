/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Temple_SecondAge_Level3_1: THREE.Mesh
    Temple_SecondAge_Level3_2: THREE.Mesh
    Temple_SecondAge_Level3_3: THREE.Mesh
  }
  materials: {
    Walls: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    Stone: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/glb/real_time_strategy_pack/Temple_SecondAge_Level3.glb',
  ) as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Temple_SecondAge_Level3_1.geometry} material={materials.Walls} />
        <mesh geometry={nodes.Temple_SecondAge_Level3_2.geometry} material={materials.Main} />
        <mesh geometry={nodes.Temple_SecondAge_Level3_3.geometry} material={materials.Stone} />
      </group>
    </group>
  )
}
