/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Wall_ArchRound_Broken_1: THREE.Mesh
    Wall_ArchRound_Broken_2: THREE.Mesh
  }
  materials: {
    Highlights: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_ruins/Wall_ArchRound_Broken.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group scale={[100, 100, 5.97]}>
        <mesh geometry={nodes.Wall_ArchRound_Broken_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Wall_ArchRound_Broken_2.geometry} material={materials.Main} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_ruins/Wall_ArchRound_Broken.glb')
