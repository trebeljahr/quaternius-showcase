/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    NormalTree_5_1: THREE.Mesh
    NormalTree_5_2: THREE.Mesh
  }
  materials: {
    NormalTree_Bark: THREE.MeshStandardMaterial
    NormalTree_Leaves: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/stylized_nature_pack/NormalTree_5.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.NormalTree_5_1.geometry} material={materials.NormalTree_Bark} />
        <mesh geometry={nodes.NormalTree_5_2.geometry} material={materials.NormalTree_Leaves} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/stylized_nature_pack/NormalTree_5.glb')
