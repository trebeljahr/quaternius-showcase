/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    GasCan_1: THREE.Mesh
    GasCan_2: THREE.Mesh
    GasCan_3: THREE.Mesh
  }
  materials: {
    Red: THREE.MeshStandardMaterial
    DarkRed: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/GasCan.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={198.94}>
        <mesh geometry={nodes.GasCan_1.geometry} material={materials.Red} />
        <mesh geometry={nodes.GasCan_2.geometry} material={materials.DarkRed} />
        <mesh geometry={nodes.GasCan_3.geometry} material={materials.Black} />
      </group>
    </group>
  )
}

useGLTF.preload('/GasCan.glb')
