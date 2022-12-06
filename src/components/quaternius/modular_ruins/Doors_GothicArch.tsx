/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Doors_GothicArch_L_1: THREE.Mesh
    Doors_GothicArch_L_2: THREE.Mesh
    Doors_GothicArch_L_3: THREE.Mesh
    Doors_GothicArch_L_4: THREE.Mesh
    Doors_GothicArch_R_1: THREE.Mesh
    Doors_GothicArch_R_2: THREE.Mesh
    Doors_GothicArch_R_3: THREE.Mesh
    Doors_GothicArch_R_4: THREE.Mesh
  }
  materials: {
    DarkWood: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    Metal_Light: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Doors_GothicArch.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[-1, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Doors_GothicArch_L_1.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Doors_GothicArch_L_2.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Doors_GothicArch_L_3.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Doors_GothicArch_L_4.geometry} material={materials.Metal_Light} />
      </group>
      <group position={[1, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Doors_GothicArch_R_1.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Doors_GothicArch_R_2.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Doors_GothicArch_R_3.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Doors_GothicArch_R_4.geometry} material={materials.Metal_Light} />
      </group>
    </group>
  )
}

useGLTF.preload('/Doors_GothicArch.glb')