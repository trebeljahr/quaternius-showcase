/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Platform_4x2_1: THREE.Mesh
    Platform_4x2_2: THREE.Mesh
    Platform_4x2_3: THREE.Mesh
    Platform_4x2_4: THREE.Mesh
    Platform_4x2_5: THREE.Mesh
    Platform_4x2_6: THREE.Mesh
  }
  materials: {
    LightGrey: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
    Orange: THREE.MeshStandardMaterial
    Texture_Signs: THREE.MeshStandardMaterial
    DarkGrey: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/cyberpunk_pack/Platform_4x2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Platform_4x2_1.geometry} material={materials.LightGrey} />
        <mesh geometry={nodes.Platform_4x2_2.geometry} material={materials.Black} />
        <mesh geometry={nodes.Platform_4x2_3.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Platform_4x2_4.geometry} material={materials.Orange} />
        <mesh geometry={nodes.Platform_4x2_5.geometry} material={materials.Texture_Signs} />
        <mesh geometry={nodes.Platform_4x2_6.geometry} material={materials.DarkGrey} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/cyberpunk_pack/Platform_4x2.glb')
