/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Ring3_1: THREE.Mesh
    Ring3_2: THREE.Mesh
  }
  materials: {
    Golden: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Ring3.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Ring3_1.geometry} material={materials.Golden} />
        <mesh geometry={nodes.Ring3_2.geometry} material={materials.Red} />
      </group>
    </group>
  )
}

useGLTF.preload('/Ring3.glb')