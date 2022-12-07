/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Rope_Long_1: THREE.Mesh
    Rope_Long_2: THREE.Mesh
  }
  materials: {
    RopeDark: THREE.MeshStandardMaterial
    Rope: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/platformer_pack/Rope_Long.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Rope_Long_1.geometry} material={materials.RopeDark} />
        <mesh geometry={nodes.Rope_Long_2.geometry} material={materials.Rope} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/platformer_pack/Rope_Long.glb')
