/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Book3_1: THREE.Mesh
    Book3_2: THREE.Mesh
    Book3_3: THREE.Mesh
  }
  materials: {
    Cover: THREE.MeshStandardMaterial
    Paper: THREE.MeshStandardMaterial
    Ink: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Book3.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.11, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Book3_1.geometry} material={materials.Cover} />
        <mesh geometry={nodes.Book3_2.geometry} material={materials.Paper} />
        <mesh geometry={nodes.Book3_3.geometry} material={materials.Ink} />
      </group>
    </group>
  )
}

useGLTF.preload('/Book3.glb')
