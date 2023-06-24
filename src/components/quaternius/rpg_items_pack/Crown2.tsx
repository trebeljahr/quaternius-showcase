/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Crown2_1: THREE.Mesh
    Crown2_2: THREE.Mesh
  }
  materials: {
    Gold: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/rpg_items_pack/Crown2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Crown2_1.geometry} material={materials.Gold} />
        <mesh geometry={nodes.Crown2_2.geometry} material={materials.Red} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/rpg_items_pack/Crown2.glb')
