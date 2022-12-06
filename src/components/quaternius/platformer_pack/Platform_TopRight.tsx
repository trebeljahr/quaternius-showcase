/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Platform_TopRight_1: THREE.Mesh
    Platform_TopRight_2: THREE.Mesh
  }
  materials: {
    Green: THREE.MeshStandardMaterial
    LightBrown: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Platform_TopRight.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Platform_TopRight_1.geometry} material={materials.Green} />
        <mesh geometry={nodes.Platform_TopRight_2.geometry} material={materials.LightBrown} />
      </group>
    </group>
  )
}

useGLTF.preload('/Platform_TopRight.glb')
