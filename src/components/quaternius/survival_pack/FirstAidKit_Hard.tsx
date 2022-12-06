/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    FirstAidKit_Hard_1: THREE.Mesh
    FirstAidKit_Hard_2: THREE.Mesh
    FirstAidKit_Hard_3: THREE.Mesh
    FirstAidKit_Hard_4: THREE.Mesh
  }
  materials: {
    White: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
    LightGrey: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/FirstAidKit_Hard.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={198.94}>
        <mesh geometry={nodes.FirstAidKit_Hard_1.geometry} material={materials.White} />
        <mesh geometry={nodes.FirstAidKit_Hard_2.geometry} material={materials.Red} />
        <mesh geometry={nodes.FirstAidKit_Hard_3.geometry} material={materials.LightGrey} />
        <mesh geometry={nodes.FirstAidKit_Hard_4.geometry} material={materials.Grey} />
      </group>
    </group>
  )
}

useGLTF.preload('/FirstAidKit_Hard.glb')
