/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    RoofTile_Empty_1: THREE.Mesh
    RoofTile_Empty_2: THREE.Mesh
  }
  materials: {
    Main: THREE.MeshStandardMaterial
    DarkGrey: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_sci_fi/RoofTile_Empty.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.RoofTile_Empty_1.geometry} material={materials.Main} />
        <mesh geometry={nodes.RoofTile_Empty_2.geometry} material={materials.DarkGrey} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_sci_fi/RoofTile_Empty.glb')
