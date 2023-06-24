/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Carpet_1: THREE.Mesh
    Carpet_2: THREE.Mesh
  }
  materials: {
    Red: THREE.MeshStandardMaterial
    Gold: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_dungeon_pack/Carpet.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Carpet_1.geometry} material={materials.Red} />
        <mesh geometry={nodes.Carpet_2.geometry} material={materials.Gold} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_dungeon_pack/Carpet.glb')
