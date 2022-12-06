/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Computer_Large_1: THREE.Mesh
    Computer_Large_2: THREE.Mesh
    Computer_Large_3: THREE.Mesh
    Computer_Large_4: THREE.Mesh
    Computer_Large_5: THREE.Mesh
    Computer_Large_6: THREE.Mesh
    Computer_Large_7: THREE.Mesh
  }
  materials: {
    Orange: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
    LightGrey: THREE.MeshStandardMaterial
    Screen: THREE.MeshStandardMaterial
    Texture_Signs: THREE.MeshStandardMaterial
    MetalLight: THREE.MeshStandardMaterial
    DarkGrey: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Computer_Large.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Computer_Large_1.geometry} material={materials.Orange} />
        <mesh geometry={nodes.Computer_Large_2.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Computer_Large_3.geometry} material={materials.LightGrey} />
        <mesh geometry={nodes.Computer_Large_4.geometry} material={materials.Screen} />
        <mesh geometry={nodes.Computer_Large_5.geometry} material={materials.Texture_Signs} />
        <mesh geometry={nodes.Computer_Large_6.geometry} material={materials.MetalLight} />
        <mesh geometry={nodes.Computer_Large_7.geometry} material={materials.DarkGrey} />
      </group>
    </group>
  )
}

useGLTF.preload('/Computer_Large.glb')
