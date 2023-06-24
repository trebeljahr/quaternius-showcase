/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    DoorSingle_Wall_SideA_1: THREE.Mesh
    DoorSingle_Wall_SideA_2: THREE.Mesh
    DoorSingle_Wall_SideA_3: THREE.Mesh
    DoorSingle_Wall_SideA_4: THREE.Mesh
  }
  materials: {
    DarkGrey: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    Accent: THREE.MeshStandardMaterial
    Light: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_sci_fi/DoorSingle_Wall_SideA.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.DoorSingle_Wall_SideA_1.geometry} material={materials.DarkGrey} />
        <mesh geometry={nodes.DoorSingle_Wall_SideA_2.geometry} material={materials.Main} />
        <mesh geometry={nodes.DoorSingle_Wall_SideA_3.geometry} material={materials.Accent} />
        <mesh geometry={nodes.DoorSingle_Wall_SideA_4.geometry} material={materials.Light} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_sci_fi/DoorSingle_Wall_SideA.glb')
