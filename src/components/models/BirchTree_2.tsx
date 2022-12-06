/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    BirchTree_2_1: THREE.Mesh
    BirchTree_2_2: THREE.Mesh
    BirchTree_2_3: THREE.Mesh
    BirchTree_2_4: THREE.Mesh
  }
  materials: {
    ['White.001']: THREE.MeshStandardMaterial
    ['Black.001']: THREE.MeshStandardMaterial
    ['DarkGreen.001']: THREE.MeshStandardMaterial
    ['Green.001']: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/BirchTree_2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.BirchTree_2_1.geometry} material={materials['White.001']} />
        <mesh geometry={nodes.BirchTree_2_2.geometry} material={materials['Black.001']} />
        <mesh geometry={nodes.BirchTree_2_3.geometry} material={materials['DarkGreen.001']} />
        <mesh geometry={nodes.BirchTree_2_4.geometry} material={materials['Green.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/BirchTree_2.glb')
