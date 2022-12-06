/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Wall_Empty_1: THREE.Mesh
    Wall_Empty_2: THREE.Mesh
    Wall_Empty_3: THREE.Mesh
    Wall_Empty_4: THREE.Mesh
  }
  materials: {
    Main: THREE.MeshStandardMaterial
    Accent: THREE.MeshStandardMaterial
    DarkGrey: THREE.MeshStandardMaterial
    Light: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Wall_Empty.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Wall_Empty_1.geometry} material={materials.Main} />
        <mesh geometry={nodes.Wall_Empty_2.geometry} material={materials.Accent} />
        <mesh geometry={nodes.Wall_Empty_3.geometry} material={materials.DarkGrey} />
        <mesh geometry={nodes.Wall_Empty_4.geometry} material={materials.Light} />
      </group>
    </group>
  )
}

useGLTF.preload('/Wall_Empty.glb')
