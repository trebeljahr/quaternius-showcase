/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Pumpkin_Crop_1: THREE.Mesh
    Pumpkin_Crop_2: THREE.Mesh
  }
  materials: {
    Orange: THREE.MeshStandardMaterial
    Green: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/crops_pack/Pumpkin_Crop.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Pumpkin_Crop_1.geometry} material={materials.Orange} />
        <mesh geometry={nodes.Pumpkin_Crop_2.geometry} material={materials.Green} />
      </group>
    </group>
  )
}
