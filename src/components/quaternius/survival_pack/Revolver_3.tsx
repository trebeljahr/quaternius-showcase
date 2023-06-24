/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Revolver_5_1: THREE.Mesh
    Revolver_5_2: THREE.Mesh
    Revolver_5_3: THREE.Mesh
  }
  materials: {
    Grey: THREE.MeshStandardMaterial
    LightMetal: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/survival_pack/Revolver_3.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Revolver_5_1.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Revolver_5_2.geometry} material={materials.LightMetal} />
        <mesh geometry={nodes.Revolver_5_3.geometry} material={materials.Metal} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/survival_pack/Revolver_3.glb')
