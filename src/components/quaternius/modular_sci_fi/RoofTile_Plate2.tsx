/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    RoofTile_Plate2_1: THREE.Mesh
    RoofTile_Plate2_2: THREE.Mesh
    RoofTile_Plate2_3: THREE.Mesh
  }
  materials: {
    Main: THREE.MeshStandardMaterial
    DarkGrey: THREE.MeshStandardMaterial
    Accent: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/RoofTile_Plate2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.RoofTile_Plate2_1.geometry} material={materials.Main} />
        <mesh geometry={nodes.RoofTile_Plate2_2.geometry} material={materials.DarkGrey} />
        <mesh geometry={nodes.RoofTile_Plate2_3.geometry} material={materials.Accent} />
      </group>
    </group>
  )
}

useGLTF.preload('/RoofTile_Plate2.glb')
