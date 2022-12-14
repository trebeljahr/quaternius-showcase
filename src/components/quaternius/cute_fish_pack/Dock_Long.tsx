/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { DoubleSide } from 'three'

type GLTFResult = GLTF & {
  nodes: {
    Dock_Long_1: THREE.Mesh
    Dock_Long_2: THREE.Mesh
    Dock_Long_3: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    LightWood: THREE.MeshStandardMaterial
    String: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/cute_fish_pack/Dock_Long.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Dock_Long_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Dock_Long_2.geometry} material={materials.LightWood} />
        <mesh geometry={nodes.Dock_Long_3.geometry} material={materials.String} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/cute_fish_pack/Dock_Long.glb')
