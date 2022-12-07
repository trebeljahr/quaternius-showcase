/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube_Default_1: THREE.Mesh
    Cube_Default_2: THREE.Mesh
  }
  materials: {
    Main: THREE.MeshStandardMaterial
    Main_Dark: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/platformer_game_pack/Cube_Default.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Cube_Default_1.geometry} material={materials.Main} />
        <mesh geometry={nodes.Cube_Default_2.geometry} material={materials.Main_Dark} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/platformer_game_pack/Cube_Default.glb')
