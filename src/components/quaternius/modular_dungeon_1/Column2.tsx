/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Column2_1: THREE.Mesh
    Column2_2: THREE.Mesh
  }
  materials: {
    Grey_Floor: THREE.MeshStandardMaterial
    DarkGrey_Floor: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Column2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Column2_1.geometry} material={materials.Grey_Floor} />
        <mesh geometry={nodes.Column2_2.geometry} material={materials.DarkGrey_Floor} />
      </group>
    </group>
  )
}

useGLTF.preload('/Column2.glb')
