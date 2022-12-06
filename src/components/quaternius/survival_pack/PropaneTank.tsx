/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    PropaneTank_1: THREE.Mesh
    PropaneTank_2: THREE.Mesh
    PropaneTank_3: THREE.Mesh
    PropaneTank_4: THREE.Mesh
  }
  materials: {
    White: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
    Orange: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/PropaneTank.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={198.94}>
        <mesh geometry={nodes.PropaneTank_1.geometry} material={materials.White} />
        <mesh geometry={nodes.PropaneTank_2.geometry} material={materials.Black} />
        <mesh geometry={nodes.PropaneTank_3.geometry} material={materials.Red} />
        <mesh geometry={nodes.PropaneTank_4.geometry} material={materials.Orange} />
      </group>
    </group>
  )
}

useGLTF.preload('/PropaneTank.glb')