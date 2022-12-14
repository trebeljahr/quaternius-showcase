/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    PalmTree_1_1: THREE.Mesh
    PalmTree_1_2: THREE.Mesh
    PalmTree_1_3: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    Green: THREE.MeshStandardMaterial
    DarkGreen: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/nature_pack/PalmTree_1.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.PalmTree_1_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.PalmTree_1_2.geometry} material={materials.Green} />
        <mesh geometry={nodes.PalmTree_1_3.geometry} material={materials.DarkGreen} />
      </group>
    </group>
  )
}
