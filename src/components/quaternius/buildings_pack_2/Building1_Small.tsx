/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Building1_Small_1: THREE.Mesh
    Building1_Small_2: THREE.Mesh
    Building1_Small_3: THREE.Mesh
    Building1_Small_4: THREE.Mesh
    Building1_Small_5: THREE.Mesh
    Building1_Small_6: THREE.Mesh
    Building1_Small_7: THREE.Mesh
  }
  materials: {
    DarkRed: THREE.MeshStandardMaterial
    Brown: THREE.MeshStandardMaterial
    Beige: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    LightYellow: THREE.MeshStandardMaterial
    DarkGrey: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/buildings_pack_2/Building1_Small.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Building1_Small_1.geometry} material={materials.DarkRed} />
        <mesh geometry={nodes.Building1_Small_2.geometry} material={materials.Brown} />
        <mesh geometry={nodes.Building1_Small_3.geometry} material={materials.Beige} />
        <mesh geometry={nodes.Building1_Small_4.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Building1_Small_5.geometry} material={materials.White} />
        <mesh geometry={nodes.Building1_Small_6.geometry} material={materials.LightYellow} />
        <mesh geometry={nodes.Building1_Small_7.geometry} material={materials.DarkGrey} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/buildings_pack_2/Building1_Small.glb')
