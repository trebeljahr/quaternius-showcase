/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    PalmTree_4_1: THREE.Mesh
    PalmTree_4_2: THREE.Mesh
    PalmTree_4_3: THREE.Mesh
    PalmTree_4_4: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    Green: THREE.MeshStandardMaterial
    DarkGreen: THREE.MeshStandardMaterial
    Coconuts: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/nature_pack/PalmTree_4.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.PalmTree_4_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.PalmTree_4_2.geometry} material={materials.Green} />
        <mesh geometry={nodes.PalmTree_4_3.geometry} material={materials.DarkGreen} />
        <mesh geometry={nodes.PalmTree_4_4.geometry} material={materials.Coconuts} />
      </group>
    </group>
  )
}
