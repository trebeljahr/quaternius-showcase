/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube_Bricks_1: THREE.Mesh
    Cube_Bricks_2: THREE.Mesh
  }
  materials: {
    Red: THREE.MeshStandardMaterial
    Red_Dark: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/platformer_game_pack/Cube_Bricks.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Cube_Bricks_1.geometry} material={materials.Red} />
        <mesh geometry={nodes.Cube_Bricks_2.geometry} material={materials.Red_Dark} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/platformer_game_pack/Cube_Bricks.glb')
