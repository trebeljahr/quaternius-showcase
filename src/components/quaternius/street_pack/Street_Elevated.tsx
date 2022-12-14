/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Street_Elevated_1: THREE.Mesh
    Street_Elevated_2: THREE.Mesh
    Street_Elevated_3: THREE.Mesh
  }
  materials: {
    Grey: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/street_pack/Street_Elevated.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Street_Elevated_1.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Street_Elevated_2.geometry} material={materials.Black} />
        <mesh geometry={nodes.Street_Elevated_3.geometry} material={materials.White} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/street_pack/Street_Elevated.glb')
