/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    AC_Stacked_1: THREE.Mesh
    AC_Stacked_2: THREE.Mesh
    AC_Stacked_3: THREE.Mesh
    AC_Stacked_4: THREE.Mesh
  }
  materials: {
    Black: THREE.MeshStandardMaterial
    LightGrey: THREE.MeshStandardMaterial
    Texture_Signs: THREE.MeshStandardMaterial
    Orange: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/cyberpunk_pack/AC_Stacked.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.AC_Stacked_1.geometry} material={materials.Black} />
        <mesh geometry={nodes.AC_Stacked_2.geometry} material={materials.LightGrey} />
        <mesh geometry={nodes.AC_Stacked_3.geometry} material={materials.Texture_Signs} />
        <mesh geometry={nodes.AC_Stacked_4.geometry} material={materials.Orange} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/cyberpunk_pack/AC_Stacked.glb')
