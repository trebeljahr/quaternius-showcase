/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ['Trex_Cylinder-Mesh']: THREE.Mesh
    ['Trex_Cylinder-Mesh_1']: THREE.Mesh
    ['Trex_Cylinder-Mesh_2']: THREE.Mesh
    ['Trex_Cylinder-Mesh_3']: THREE.Mesh
    ['Trex_Cylinder-Mesh_4']: THREE.Mesh
  }
  materials: {
    Green: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    LightGreen: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
    LightYellow: THREE.MeshStandardMaterial
  }
}

export function Trex(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Trex.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['Trex_Cylinder-Mesh'].geometry} material={materials.Green} />
      <mesh geometry={nodes['Trex_Cylinder-Mesh_1'].geometry} material={materials.Black} />
      <mesh geometry={nodes['Trex_Cylinder-Mesh_2'].geometry} material={materials.LightGreen} />
      <mesh geometry={nodes['Trex_Cylinder-Mesh_3'].geometry} material={materials.Red} />
      <mesh geometry={nodes['Trex_Cylinder-Mesh_4'].geometry} material={materials.LightYellow} />
    </group>
  )
}