/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Wall_ArchRound_Overgrown_1: THREE.Mesh
    Wall_ArchRound_Overgrown_2: THREE.Mesh
    Wall_ArchRound_Overgrown_3: THREE.Mesh
    Wall_ArchRound_Overgrown_4: THREE.Mesh
  }
  materials: {
    Green: THREE.MeshStandardMaterial
    Leaf_Texture: THREE.MeshStandardMaterial
    Highlights: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Wall_ArchRound_Overgrown.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group scale={[100, 100, 5.97]}>
        <mesh geometry={nodes.Wall_ArchRound_Overgrown_1.geometry} material={materials.Green} />
        <mesh geometry={nodes.Wall_ArchRound_Overgrown_2.geometry} material={materials.Leaf_Texture} />
        <mesh geometry={nodes.Wall_ArchRound_Overgrown_3.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Wall_ArchRound_Overgrown_4.geometry} material={materials.Main} />
      </group>
    </group>
  )
}

useGLTF.preload('/Wall_ArchRound_Overgrown.glb')
