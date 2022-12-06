/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Dummy_1: THREE.Mesh
    Dummy_2: THREE.Mesh
  }
  materials: {
    DarkWood: THREE.MeshStandardMaterial
    Leather: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Dummy.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Dummy_1.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Dummy_2.geometry} material={materials.Leather} />
      </group>
    </group>
  )
}

useGLTF.preload('/Dummy.glb')
