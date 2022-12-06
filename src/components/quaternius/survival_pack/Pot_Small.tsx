/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Pot_Small_1: THREE.Mesh
    Pot_Small_2: THREE.Mesh
  }
  materials: {
    Black: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Pot_Small.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={72.52}>
        <mesh geometry={nodes.Pot_Small_1.geometry} material={materials.Black} />
        <mesh geometry={nodes.Pot_Small_2.geometry} material={materials.Grey} />
      </group>
    </group>
  )
}

useGLTF.preload('/Pot_Small.glb')
