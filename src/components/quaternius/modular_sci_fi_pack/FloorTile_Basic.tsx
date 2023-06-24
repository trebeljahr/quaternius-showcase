/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    FloorTile_Basic_1: THREE.Mesh
    FloorTile_Basic_2: THREE.Mesh
  }
  materials: {
    Main: THREE.MeshStandardMaterial
    DarkGrey: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_sci_fi/FloorTile_Basic.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.FloorTile_Basic_1.geometry} material={materials.Main} />
        <mesh geometry={nodes.FloorTile_Basic_2.geometry} material={materials.DarkGrey} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_sci_fi/FloorTile_Basic.glb')