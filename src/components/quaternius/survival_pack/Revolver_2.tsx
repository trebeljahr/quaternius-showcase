/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Revolver_4_1: THREE.Mesh
    Revolver_4_2: THREE.Mesh
    Revolver_4_3: THREE.Mesh
  }
  materials: {
    Metal: THREE.MeshStandardMaterial
    LightMetal: THREE.MeshStandardMaterial
    DarkWood: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/survival_pack/Revolver_2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Revolver_4_1.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Revolver_4_2.geometry} material={materials.LightMetal} />
        <mesh geometry={nodes.Revolver_4_3.geometry} material={materials.DarkWood} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/survival_pack/Revolver_2.glb')
