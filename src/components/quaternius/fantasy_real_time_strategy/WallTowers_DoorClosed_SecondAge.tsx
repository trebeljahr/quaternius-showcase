/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    WallTowers_DoorClosed_SecondAge_1: THREE.Mesh
    WallTowers_DoorClosed_SecondAge_2: THREE.Mesh
    WallTowers_DoorClosed_SecondAge_3: THREE.Mesh
    WallTowers_DoorClosed_SecondAge_4: THREE.Mesh
    WallTowers_DoorClosed_SecondAge_5: THREE.Mesh
  }
  materials: {
    Metal: THREE.MeshStandardMaterial
    Stone_Light: THREE.MeshStandardMaterial
    Stone: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/WallTowers_DoorClosed_SecondAge.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.WallTowers_DoorClosed_SecondAge_1.geometry} material={materials.Metal} />
        <mesh geometry={nodes.WallTowers_DoorClosed_SecondAge_2.geometry} material={materials.Stone_Light} />
        <mesh geometry={nodes.WallTowers_DoorClosed_SecondAge_3.geometry} material={materials.Stone} />
        <mesh geometry={nodes.WallTowers_DoorClosed_SecondAge_4.geometry} material={materials.Wood} />
        <mesh geometry={nodes.WallTowers_DoorClosed_SecondAge_5.geometry} material={materials.Main} />
      </group>
    </group>
  )
}
