/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Resource_Gold_1_1: THREE.Mesh
    Resource_Gold_1_2: THREE.Mesh
  }
  materials: {
    Stone: THREE.MeshStandardMaterial
    Gold: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/real_time_strategy_pack/Resource_Gold_1.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Resource_Gold_1_1.geometry} material={materials.Stone} />
        <mesh geometry={nodes.Resource_Gold_1_2.geometry} material={materials.Gold} />
      </group>
    </group>
  )
}
