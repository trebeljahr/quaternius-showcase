/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ChickenLeg_1: THREE.Mesh
    ChickenLeg_2: THREE.Mesh
  }
  materials: {
    Beige: THREE.MeshStandardMaterial
    Brown: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/ChickenLeg.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.ChickenLeg_1.geometry} material={materials.Beige} />
        <mesh geometry={nodes.ChickenLeg_2.geometry} material={materials.Brown} />
      </group>
    </group>
  )
}

useGLTF.preload('/ChickenLeg.glb')
