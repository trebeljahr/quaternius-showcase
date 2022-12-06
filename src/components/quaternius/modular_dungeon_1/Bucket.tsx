/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Bucket_1: THREE.Mesh
    Bucket_2: THREE.Mesh
    Bucket_3: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    DarkMetal: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Bucket.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Bucket_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Bucket_2.geometry} material={materials.DarkMetal} />
        <mesh geometry={nodes.Bucket_3.geometry} material={materials.Metal} />
      </group>
    </group>
  )
}

useGLTF.preload('/Bucket.glb')
