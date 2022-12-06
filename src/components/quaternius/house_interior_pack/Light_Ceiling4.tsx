/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Light_Ceiling4_1: THREE.Mesh
    Light_Ceiling4_2: THREE.Mesh
    Light_Ceiling4_3: THREE.Mesh
  }
  materials: {
    LightMetal: THREE.MeshStandardMaterial
    Light: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Light_Ceiling4.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Light_Ceiling4_1.geometry} material={materials.LightMetal} />
        <mesh geometry={nodes.Light_Ceiling4_2.geometry} material={materials.Light} />
        <mesh geometry={nodes.Light_Ceiling4_3.geometry} material={materials.Grey} />
      </group>
    </group>
  )
}

useGLTF.preload('/Light_Ceiling4.glb')
