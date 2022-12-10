/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Dock_Long_NoRope_1: THREE.Mesh
    Dock_Long_NoRope_2: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    LightWood: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Dock_Long_NoRope.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Dock_Long_NoRope_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Dock_Long_NoRope_2.geometry} material={materials.LightWood} />
      </group>
    </group>
  )
}

useGLTF.preload('/Dock_Long_NoRope.glb')
