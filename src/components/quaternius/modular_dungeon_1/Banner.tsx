/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Banner_1: THREE.Mesh
    Banner_2: THREE.Mesh
    Banner_3: THREE.Mesh
    Banner_4: THREE.Mesh
  }
  materials: {
    Metal: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    DarkMetal: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Banner.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Banner_1.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Banner_2.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Banner_3.geometry} material={materials.Main} />
        <mesh geometry={nodes.Banner_4.geometry} material={materials.DarkMetal} />
      </group>
    </group>
  )
}

useGLTF.preload('/Banner.glb')
