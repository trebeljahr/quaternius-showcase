/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    WonderWalls_SecondAge_1: THREE.Mesh
    WonderWalls_SecondAge_2: THREE.Mesh
    WonderWalls_SecondAge_3: THREE.Mesh
  }
  materials: {
    Stone: THREE.MeshStandardMaterial
    Stone_Light: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/glb/real_time_strategy_pack/WonderWalls_SecondAge.glb',
  ) as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.WonderWalls_SecondAge_1.geometry} material={materials.Stone} />
        <mesh geometry={nodes.WonderWalls_SecondAge_2.geometry} material={materials.Stone_Light} />
        <mesh geometry={nodes.WonderWalls_SecondAge_3.geometry} material={materials.Wood} />
      </group>
    </group>
  )
}
