/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Building2_Small_1: THREE.Mesh
    Building2_Small_2: THREE.Mesh
    Building2_Small_3: THREE.Mesh
    Building2_Small_4: THREE.Mesh
    Building2_Small_5: THREE.Mesh
    Building2_Small_6: THREE.Mesh
    Building2_Small_7: THREE.Mesh
  }
  materials: {
    Brown: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    Beige: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
    LightBlue: THREE.MeshStandardMaterial
    DarkGrey: THREE.MeshStandardMaterial
    GreyBlue: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/buildings_pack_2/Building2_Small.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Building2_Small_1.geometry} material={materials.Brown} />
        <mesh geometry={nodes.Building2_Small_2.geometry} material={materials.White} />
        <mesh geometry={nodes.Building2_Small_3.geometry} material={materials.Beige} />
        <mesh geometry={nodes.Building2_Small_4.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Building2_Small_5.geometry} material={materials.LightBlue} />
        <mesh geometry={nodes.Building2_Small_6.geometry} material={materials.DarkGrey} />
        <mesh geometry={nodes.Building2_Small_7.geometry} material={materials.GreyBlue} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/buildings_pack_2/Building2_Small.glb')
