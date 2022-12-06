/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Props_Crate_1: THREE.Mesh
    Props_Crate_2: THREE.Mesh
    Props_Crate_3: THREE.Mesh
    Props_Crate_4: THREE.Mesh
    Props_Crate_5: THREE.Mesh
  }
  materials: {
    Main: THREE.MeshStandardMaterial
    Accent: THREE.MeshStandardMaterial
    DarkGrey: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    DarkAccent: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Props_Crate.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Props_Crate_1.geometry} material={materials.Main} />
        <mesh geometry={nodes.Props_Crate_2.geometry} material={materials.Accent} />
        <mesh geometry={nodes.Props_Crate_3.geometry} material={materials.DarkGrey} />
        <mesh geometry={nodes.Props_Crate_4.geometry} material={materials.Black} />
        <mesh geometry={nodes.Props_Crate_5.geometry} material={materials.DarkAccent} />
      </group>
    </group>
  )
}

useGLTF.preload('/Props_Crate.glb')
