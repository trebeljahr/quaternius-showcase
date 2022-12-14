/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Goal_Flag_1: THREE.Mesh
    Goal_Flag_2: THREE.Mesh
  }
  materials: {
    Metal: THREE.MeshStandardMaterial
    Flag: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/platformer_game_pack/Goal_Flag.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Goal_Flag_1.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Goal_Flag_2.geometry} material={materials.Flag} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/platformer_game_pack/Goal_Flag.glb')
