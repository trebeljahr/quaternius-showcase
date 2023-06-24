/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Collectible_Board_1: THREE.Mesh
    Collectible_Board_2: THREE.Mesh
    Collectible_Board_3: THREE.Mesh
    Collectible_Board_4: THREE.Mesh
  }
  materials: {
    Green: THREE.MeshStandardMaterial
    DarkGrey: THREE.MeshStandardMaterial
    Gold: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/cyberpunk_pack/Collectible_Board.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Collectible_Board_1.geometry} material={materials.Green} />
        <mesh geometry={nodes.Collectible_Board_2.geometry} material={materials.DarkGrey} />
        <mesh geometry={nodes.Collectible_Board_3.geometry} material={materials.Gold} />
        <mesh geometry={nodes.Collectible_Board_4.geometry} material={materials.Grey} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/cyberpunk_pack/Collectible_Board.glb')
