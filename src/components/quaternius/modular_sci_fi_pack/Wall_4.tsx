/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Wall_4_1: THREE.Mesh
    Wall_4_2: THREE.Mesh
    Wall_4_3: THREE.Mesh
    Wall_4_4: THREE.Mesh
  }
  materials: {
    DarkGrey: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    Accent: THREE.MeshStandardMaterial
    Light: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_sci_fi/Wall_4.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Wall_4_1.geometry} material={materials.DarkGrey} />
        <mesh geometry={nodes.Wall_4_2.geometry} material={materials.Main} />
        <mesh geometry={nodes.Wall_4_3.geometry} material={materials.Accent} />
        <mesh geometry={nodes.Wall_4_4.geometry} material={materials.Light} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_sci_fi/Wall_4.glb')
