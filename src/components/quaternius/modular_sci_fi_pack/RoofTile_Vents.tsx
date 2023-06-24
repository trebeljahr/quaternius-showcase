/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    RoofTile_Vents_1: THREE.Mesh
    RoofTile_Vents_2: THREE.Mesh
    RoofTile_Vents_3: THREE.Mesh
    RoofTile_Vents_4: THREE.Mesh
  }
  materials: {
    Main: THREE.MeshStandardMaterial
    DarkGrey: THREE.MeshStandardMaterial
    Accent: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_sci_fi/RoofTile_Vents.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.RoofTile_Vents_1.geometry} material={materials.Main} />
        <mesh geometry={nodes.RoofTile_Vents_2.geometry} material={materials.DarkGrey} />
        <mesh geometry={nodes.RoofTile_Vents_3.geometry} material={materials.Accent} />
        <mesh geometry={nodes.RoofTile_Vents_4.geometry} material={materials.Black} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_sci_fi/RoofTile_Vents.glb')
