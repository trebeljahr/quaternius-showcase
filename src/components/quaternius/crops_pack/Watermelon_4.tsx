/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Watermelon_4_1: THREE.Mesh
    Watermelon_4_2: THREE.Mesh
    Watermelon_4_3: THREE.Mesh
  }
  materials: {
    Green: THREE.MeshStandardMaterial
    DarkGreen2: THREE.MeshStandardMaterial
    DarkGreen: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Watermelon_4.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Watermelon_4_1.geometry} material={materials.Green} />
        <mesh geometry={nodes.Watermelon_4_2.geometry} material={materials.DarkGreen2} />
        <mesh geometry={nodes.Watermelon_4_3.geometry} material={materials.DarkGreen} />
      </group>
    </group>
  )
}
