/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Pistol_2_1: THREE.Mesh
    Pistol_2_2: THREE.Mesh
    Pistol_2_3: THREE.Mesh
    Pistol_2_4: THREE.Mesh
  }
  materials: {
    White: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Pistol_2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Pistol_2_1.geometry} material={materials.White} />
        <mesh geometry={nodes.Pistol_2_2.geometry} material={materials.Black} />
        <mesh geometry={nodes.Pistol_2_3.geometry} material={materials.Main} />
        <mesh geometry={nodes.Pistol_2_4.geometry} material={materials.Grey} />
      </group>
    </group>
  )
}

useGLTF.preload('/Pistol_2.glb')
