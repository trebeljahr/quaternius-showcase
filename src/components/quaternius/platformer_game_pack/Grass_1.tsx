/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Grass_1: THREE.Mesh
  }
  materials: {
    Green_Light: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/platformer_game_pack/Grass_1.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Grass_1.geometry} material={materials.Green_Light} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/glb/platformer_game_pack/Grass_1.glb')
