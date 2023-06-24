/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Staircase_1: THREE.Mesh
    Staircase_2: THREE.Mesh
    Staircase_3: THREE.Mesh
  }
  materials: {
    DarkGrey: THREE.MeshStandardMaterial
    Accent: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_sci_fi/Staircase.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Staircase_1.geometry} material={materials.DarkGrey} />
        <mesh geometry={nodes.Staircase_2.geometry} material={materials.Accent} />
        <mesh geometry={nodes.Staircase_3.geometry} material={materials.Main} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_sci_fi/Staircase.glb')