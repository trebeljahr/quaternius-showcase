/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    TV_3_1: THREE.Mesh
    TV_3_2: THREE.Mesh
    TV_3_3: THREE.Mesh
    TV_3_4: THREE.Mesh
  }
  materials: {
    Grey: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    LightGrey: THREE.MeshStandardMaterial
    Texture_Signs: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/cyberpunk_pack/TV_3.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.TV_3_1.geometry} material={materials.Grey} />
        <mesh geometry={nodes.TV_3_2.geometry} material={materials.Black} />
        <mesh geometry={nodes.TV_3_3.geometry} material={materials.LightGrey} />
        <mesh geometry={nodes.TV_3_4.geometry} material={materials.Texture_Signs} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/cyberpunk_pack/TV_3.glb')
