/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Bag_Standing_1: THREE.Mesh
    Bag_Standing_2: THREE.Mesh
  }
  materials: {
    Bag: THREE.MeshStandardMaterial
    Thread: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_dungeon_1/Bag_Standing.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Bag_Standing_1.geometry} material={materials.Bag} />
        <mesh geometry={nodes.Bag_Standing_2.geometry} material={materials.Thread} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_dungeon_1/Bag_Standing.glb')
