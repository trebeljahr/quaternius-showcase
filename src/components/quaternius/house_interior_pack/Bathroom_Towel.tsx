/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Bathroom_Towel_1: THREE.Mesh
    Bathroom_Towel_2: THREE.Mesh
    Bathroom_Towel_3: THREE.Mesh
  }
  materials: {
    LightMetal: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/house_interior_pack/Bathroom_Towel.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Bathroom_Towel_1.geometry} material={materials.LightMetal} />
        <mesh geometry={nodes.Bathroom_Towel_2.geometry} material={materials.White} />
        <mesh geometry={nodes.Bathroom_Towel_3.geometry} material={materials.Red} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/house_interior_pack/Bathroom_Towel.glb')
