/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    RoofTile_Corner_Pipes_1: THREE.Mesh
    RoofTile_Corner_Pipes_2: THREE.Mesh
    RoofTile_Corner_Pipes_3: THREE.Mesh
    RoofTile_Corner_Pipes_4: THREE.Mesh
  }
  materials: {
    Main: THREE.MeshStandardMaterial
    DarkGrey: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    Accent: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/RoofTile_Corner_Pipes.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.RoofTile_Corner_Pipes_1.geometry} material={materials.Main} />
        <mesh geometry={nodes.RoofTile_Corner_Pipes_2.geometry} material={materials.DarkGrey} />
        <mesh geometry={nodes.RoofTile_Corner_Pipes_3.geometry} material={materials.Black} />
        <mesh geometry={nodes.RoofTile_Corner_Pipes_4.geometry} material={materials.Accent} />
      </group>
    </group>
  )
}

useGLTF.preload('/RoofTile_Corner_Pipes.glb')
