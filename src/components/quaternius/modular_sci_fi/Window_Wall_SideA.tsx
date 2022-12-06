/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Window_Wall_SideA_1: THREE.Mesh
    Window_Wall_SideA_2: THREE.Mesh
    Window_Wall_SideA_3: THREE.Mesh
    Window_Wall_SideA_4: THREE.Mesh
    Window_Wall_SideA_5: THREE.Mesh
  }
  materials: {
    Main: THREE.MeshStandardMaterial
    Accent: THREE.MeshStandardMaterial
    DarkGrey: THREE.MeshStandardMaterial
    Light: THREE.MeshStandardMaterial
    Glass: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Window_Wall_SideA.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Window_Wall_SideA_1.geometry} material={materials.Main} />
        <mesh geometry={nodes.Window_Wall_SideA_2.geometry} material={materials.Accent} />
        <mesh geometry={nodes.Window_Wall_SideA_3.geometry} material={materials.DarkGrey} />
        <mesh geometry={nodes.Window_Wall_SideA_4.geometry} material={materials.Light} />
        <mesh geometry={nodes.Window_Wall_SideA_5.geometry} material={materials.Glass} />
      </group>
    </group>
  )
}

useGLTF.preload('/Window_Wall_SideA.glb')
