/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Bush_Fruit_1: THREE.Mesh
    Bush_Fruit_2: THREE.Mesh
  }
  materials: {
    Green: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/platformer_game_pack/Bush_Fruit.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Bush_Fruit_1.geometry} material={materials.Green} />
        <mesh geometry={nodes.Bush_Fruit_2.geometry} material={materials.Red} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/platformer_game_pack/Bush_Fruit.glb')
