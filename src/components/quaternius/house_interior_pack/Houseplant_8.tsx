/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Houseplant_8_1: THREE.Mesh
    Houseplant_8_2: THREE.Mesh
    Houseplant_8_3: THREE.Mesh
  }
  materials: {
    Black: THREE.MeshStandardMaterial
    Brown: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Houseplant_8.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Houseplant_8_1.geometry} material={materials.Black} />
        <mesh geometry={nodes.Houseplant_8_2.geometry} material={materials.Brown} />
        <mesh geometry={nodes.Houseplant_8_3.geometry} material={materials.Wood} />
      </group>
    </group>
  )
}

useGLTF.preload('/Houseplant_8.glb')
