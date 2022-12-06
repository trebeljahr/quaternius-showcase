/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Computer_1: THREE.Mesh
    Computer_2: THREE.Mesh
    Computer_3: THREE.Mesh
    Computer_4: THREE.Mesh
  }
  materials: {
    LightGrey: THREE.MeshStandardMaterial
    Orange: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
    Screen: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Computer.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Computer_1.geometry} material={materials.LightGrey} />
        <mesh geometry={nodes.Computer_2.geometry} material={materials.Orange} />
        <mesh geometry={nodes.Computer_3.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Computer_4.geometry} material={materials.Screen} />
      </group>
    </group>
  )
}

useGLTF.preload('/Computer.glb')
