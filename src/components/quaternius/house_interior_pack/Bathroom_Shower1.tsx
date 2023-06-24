/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Bathroom_Shower1_1: THREE.Mesh
    Bathroom_Shower1_2: THREE.Mesh
    Bathroom_Shower1_3: THREE.Mesh
    Bathroom_Shower1_4: THREE.Mesh
  }
  materials: {
    Grey: THREE.MeshStandardMaterial
    LightMetal: THREE.MeshStandardMaterial
    Couch_Blue: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/house_interior_pack/Bathroom_Shower1.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Bathroom_Shower1_1.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Bathroom_Shower1_2.geometry} material={materials.LightMetal} />
        <mesh geometry={nodes.Bathroom_Shower1_3.geometry} material={materials.Couch_Blue} />
        <mesh geometry={nodes.Bathroom_Shower1_4.geometry} material={materials.Metal} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/house_interior_pack/Bathroom_Shower1.glb')
