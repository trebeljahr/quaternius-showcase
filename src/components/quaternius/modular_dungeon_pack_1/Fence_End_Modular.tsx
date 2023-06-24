/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Fence_End_Modular_1: THREE.Mesh
    Fence_End_Modular_2: THREE.Mesh
  }
  materials: {
    Grey_Floor: THREE.MeshStandardMaterial
    DarkGrey_Floor: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_dungeon_1/Fence_End_Modular.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Fence_End_Modular_1.geometry} material={materials.Grey_Floor} />
        <mesh geometry={nodes.Fence_End_Modular_2.geometry} material={materials.DarkGrey_Floor} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_dungeon_1/Fence_End_Modular.glb')
