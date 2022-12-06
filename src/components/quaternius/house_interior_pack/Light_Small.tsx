/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Light_Small_1: THREE.Mesh
    Light_Small_2: THREE.Mesh
  }
  materials: {
    Grey: THREE.MeshStandardMaterial
    Light: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Light_Small.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Light_Small_1.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Light_Small_2.geometry} material={materials.Light} />
      </group>
    </group>
  )
}

useGLTF.preload('/Light_Small.glb')
