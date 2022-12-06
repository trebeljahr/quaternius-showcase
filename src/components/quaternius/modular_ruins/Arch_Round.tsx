/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Arch_Round_1: THREE.Mesh
    Arch_Round_2: THREE.Mesh
    Arch_Round_3: THREE.Mesh
  }
  materials: {
    Main: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    Highlights: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Arch_Round.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Arch_Round_1.geometry} material={materials.Main} />
        <mesh geometry={nodes.Arch_Round_2.geometry} material={materials.Black} />
        <mesh geometry={nodes.Arch_Round_3.geometry} material={materials.Highlights} />
      </group>
    </group>
  )
}

useGLTF.preload('/Arch_Round.glb')
