/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    DoorSingleLong_Wall_SideA_1: THREE.Mesh
    DoorSingleLong_Wall_SideA_2: THREE.Mesh
    DoorSingleLong_Wall_SideA_3: THREE.Mesh
    DoorSingleLong_Wall_SideA_4: THREE.Mesh
  }
  materials: {
    DarkGrey: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    Accent: THREE.MeshStandardMaterial
    Light: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/DoorSingleLong_Wall_SideA.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.DoorSingleLong_Wall_SideA_1.geometry} material={materials.DarkGrey} />
        <mesh geometry={nodes.DoorSingleLong_Wall_SideA_2.geometry} material={materials.Main} />
        <mesh geometry={nodes.DoorSingleLong_Wall_SideA_3.geometry} material={materials.Accent} />
        <mesh geometry={nodes.DoorSingleLong_Wall_SideA_4.geometry} material={materials.Light} />
      </group>
    </group>
  )
}

useGLTF.preload('/DoorSingleLong_Wall_SideA.glb')
