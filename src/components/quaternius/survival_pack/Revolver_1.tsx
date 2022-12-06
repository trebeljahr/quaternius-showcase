/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Revolver_1_1: THREE.Mesh
    Revolver_1_2: THREE.Mesh
    Revolver_1_3: THREE.Mesh
  }
  materials: {
    Metal: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    LightMetal: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Revolver_1.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Revolver_1_1.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Revolver_1_2.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Revolver_1_3.geometry} material={materials.LightMetal} />
      </group>
    </group>
  )
}

useGLTF.preload('/Revolver_1.glb')