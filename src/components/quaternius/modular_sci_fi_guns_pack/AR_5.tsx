/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    AR_5_1: THREE.Mesh
    AR_5_2: THREE.Mesh
    AR_5_3: THREE.Mesh
    AR_5_4: THREE.Mesh
  }
  materials: {
    Black: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/AR_5.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.AR_5_1.geometry} material={materials.Black} />
        <mesh geometry={nodes.AR_5_2.geometry} material={materials.Grey} />
        <mesh geometry={nodes.AR_5_3.geometry} material={materials.White} />
        <mesh geometry={nodes.AR_5_4.geometry} material={materials.Main} />
      </group>
    </group>
  )
}

useGLTF.preload('/AR_5.glb')
