/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Arch_1: THREE.Mesh
    Arch_2: THREE.Mesh
    Arch_3: THREE.Mesh
  }
  materials: {
    Wall_Dark: THREE.MeshStandardMaterial
    Wall_Highlights: THREE.MeshStandardMaterial
    Wall_Medium: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_dungeon_1/Arch.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Arch_1.geometry} material={materials.Wall_Dark} />
        <mesh geometry={nodes.Arch_2.geometry} material={materials.Wall_Highlights} />
        <mesh geometry={nodes.Arch_3.geometry} material={materials.Wall_Medium} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_dungeon_1/Arch.glb')