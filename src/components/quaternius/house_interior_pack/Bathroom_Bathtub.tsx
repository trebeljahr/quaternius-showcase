/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Bathroom_Bathtub_1: THREE.Mesh
    Bathroom_Bathtub_2: THREE.Mesh
  }
  materials: {
    White: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/house_interior_pack/Bathroom_Bathtub.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Bathroom_Bathtub_1.geometry} material={materials.White} />
        <mesh geometry={nodes.Bathroom_Bathtub_2.geometry} material={materials.Grey} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/house_interior_pack/Bathroom_Bathtub.glb')
