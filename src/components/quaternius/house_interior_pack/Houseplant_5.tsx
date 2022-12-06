/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Houseplant_5_1: THREE.Mesh
    Houseplant_5_2: THREE.Mesh
    Houseplant_5_3: THREE.Mesh
  }
  materials: {
    Black: THREE.MeshStandardMaterial
    Brown: THREE.MeshStandardMaterial
    Plant_Green: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Houseplant_5.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Houseplant_5_1.geometry} material={materials.Black} />
        <mesh geometry={nodes.Houseplant_5_2.geometry} material={materials.Brown} />
        <mesh geometry={nodes.Houseplant_5_3.geometry} material={materials.Plant_Green} />
      </group>
    </group>
  )
}

useGLTF.preload('/Houseplant_5.glb')
