/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Column_2_1: THREE.Mesh
    Column_2_2: THREE.Mesh
  }
  materials: {
    Main: THREE.MeshStandardMaterial
    DarkGrey: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Column_2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Column_2_1.geometry} material={materials.Main} />
        <mesh geometry={nodes.Column_2_2.geometry} material={materials.DarkGrey} />
      </group>
    </group>
  )
}

useGLTF.preload('/Column_2.glb')
