/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Door_1: THREE.Mesh
    Door_2: THREE.Mesh
    Door_3: THREE.Mesh
    Door_4: THREE.Mesh
  }
  materials: {
    Grey: THREE.MeshStandardMaterial
    Orange: THREE.MeshStandardMaterial
    LightGrey: THREE.MeshStandardMaterial
    Screen: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Door.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Door_1.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Door_2.geometry} material={materials.Orange} />
        <mesh geometry={nodes.Door_3.geometry} material={materials.LightGrey} />
        <mesh geometry={nodes.Door_4.geometry} material={materials.Screen} />
      </group>
    </group>
  )
}

useGLTF.preload('/Door.glb')
