/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Banner_wall_1: THREE.Mesh
    Banner_wall_2: THREE.Mesh
    Banner_wall_3: THREE.Mesh
  }
  materials: {
    Metal: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_dungeon_1/Banner_wall.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Banner_wall_1.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Banner_wall_2.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Banner_wall_3.geometry} material={materials.Main} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_dungeon_1/Banner_wall.glb')
