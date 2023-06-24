/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Spikes_Platform_1: THREE.Mesh
    Spikes_Platform_2: THREE.Mesh
  }
  materials: {
    DarkGrey: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/platformer_pack/Spikes_Platform.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Spikes_Platform_1.geometry} material={materials.DarkGrey} />
        <mesh geometry={nodes.Spikes_Platform_2.geometry} material={materials.Grey} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/platformer_pack/Spikes_Platform.glb')
