/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Light_Cube2_1: THREE.Mesh
    Light_Cube2_2: THREE.Mesh
    Light_Cube2_3: THREE.Mesh
    Light_Cube2_4: THREE.Mesh
  }
  materials: {
    Grey: THREE.MeshStandardMaterial
    LightMetal: THREE.MeshStandardMaterial
    Light: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Light_Cube2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Light_Cube2_1.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Light_Cube2_2.geometry} material={materials.LightMetal} />
        <mesh geometry={nodes.Light_Cube2_3.geometry} material={materials.Light} />
        <mesh geometry={nodes.Light_Cube2_4.geometry} material={materials.White} />
      </group>
    </group>
  )
}

useGLTF.preload('/Light_Cube2.glb')
