/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Support_Right_1: THREE.Mesh
    Support_Right_2: THREE.Mesh
    Support_Right_3: THREE.Mesh
    Support_Right_4: THREE.Mesh
  }
  materials: {
    Main: THREE.MeshStandardMaterial
    Highlights: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    Main2: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Support_Right.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI]} scale={100}>
        <mesh geometry={nodes.Support_Right_1.geometry} material={materials.Main} />
        <mesh geometry={nodes.Support_Right_2.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Support_Right_3.geometry} material={materials.Black} />
        <mesh geometry={nodes.Support_Right_4.geometry} material={materials.Main2} />
      </group>
    </group>
  )
}

useGLTF.preload('/Support_Right.glb')
