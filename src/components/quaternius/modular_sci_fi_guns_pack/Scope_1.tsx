/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Scope_1_1: THREE.Mesh
    Scope_1_2: THREE.Mesh
    Scope_1_3: THREE.Mesh
    Scope_1_4: THREE.Mesh
  }
  materials: {
    Grey: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    Glass: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_sci_fi_guns_pack/Scope_1.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Scope_1_1.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Scope_1_2.geometry} material={materials.Main} />
        <mesh geometry={nodes.Scope_1_3.geometry} material={materials.White} />
        <mesh geometry={nodes.Scope_1_4.geometry} material={materials.Glass} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_sci_fi_guns_pack/Scope_1.glb')
