/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Pumpkin_Harvested_1: THREE.Mesh
    Pumpkin_Harvested_2: THREE.Mesh
  }
  materials: {
    Green: THREE.MeshStandardMaterial
    DarkGreen: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/crops_pack/Pumpkin_Harvested.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Pumpkin_Harvested_1.geometry} material={materials.Green} />
        <mesh geometry={nodes.Pumpkin_Harvested_2.geometry} material={materials.DarkGreen} />
      </group>
    </group>
  )
}
