/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Street_Bridge_Ramp_1: THREE.Mesh
    Street_Bridge_Ramp_2: THREE.Mesh
    Street_Bridge_Ramp_3: THREE.Mesh
    Street_Bridge_Ramp_4: THREE.Mesh
  }
  materials: {
    Grey: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    Stone: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Street_Bridge_Ramp.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Street_Bridge_Ramp_1.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Street_Bridge_Ramp_2.geometry} material={materials.Black} />
        <mesh geometry={nodes.Street_Bridge_Ramp_3.geometry} material={materials.White} />
        <mesh geometry={nodes.Street_Bridge_Ramp_4.geometry} material={materials.Stone} />
      </group>
    </group>
  )
}

useGLTF.preload('/Street_Bridge_Ramp.glb')
