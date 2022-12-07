/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Tree_Fruit_1: THREE.Mesh
    Tree_Fruit_2: THREE.Mesh
    Tree_Fruit_3: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
    Green: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/platformer_game_pack/Tree_Fruit.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Tree_Fruit_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Tree_Fruit_2.geometry} material={materials.Red} />
        <mesh geometry={nodes.Tree_Fruit_3.geometry} material={materials.Green} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/platformer_game_pack/Tree_Fruit.glb')
