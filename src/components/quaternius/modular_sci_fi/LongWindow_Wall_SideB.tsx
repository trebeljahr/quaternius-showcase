/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    LongWindow_Wall_SideB_1: THREE.Mesh
    LongWindow_Wall_SideB_2: THREE.Mesh
    LongWindow_Wall_SideB_3: THREE.Mesh
    LongWindow_Wall_SideB_4: THREE.Mesh
    LongWindow_Wall_SideB_5: THREE.Mesh
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
  const { nodes, materials } = useGLTF('/LongWindow_Wall_SideB.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.LongWindow_Wall_SideB_1.geometry} material={materials.Main} />
        <mesh geometry={nodes.LongWindow_Wall_SideB_2.geometry} material={materials.Accent} />
        <mesh geometry={nodes.LongWindow_Wall_SideB_3.geometry} material={materials.DarkGrey} />
        <mesh geometry={nodes.LongWindow_Wall_SideB_4.geometry} material={materials.Light} />
        <mesh geometry={nodes.LongWindow_Wall_SideB_5.geometry} material={materials.Glass} />
      </group>
    </group>
  )
}

useGLTF.preload('/LongWindow_Wall_SideB.glb')
