/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Tent_1: THREE.Mesh
    Tent_2: THREE.Mesh
    Tent_3: THREE.Mesh
    Tent_4: THREE.Mesh
  }
  materials: {
    DarkWood: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    Green: THREE.MeshStandardMaterial
    LightGreen: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Tent.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={348.61}>
        <mesh geometry={nodes.Tent_1.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Tent_2.geometry} material={materials.Black} />
        <mesh geometry={nodes.Tent_3.geometry} material={materials.Green} />
        <mesh geometry={nodes.Tent_4.geometry} material={materials.LightGreen} />
      </group>
    </group>
  )
}

useGLTF.preload('/Tent.glb')
