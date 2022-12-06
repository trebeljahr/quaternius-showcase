/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Pipe_Straight_1: THREE.Mesh
    Pipe_Straight_2: THREE.Mesh
  }
  materials: {
    Pipe: THREE.MeshStandardMaterial
    Pipe_Light: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Pipe_Straight.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Pipe_Straight_1.geometry} material={materials.Pipe} />
        <mesh geometry={nodes.Pipe_Straight_2.geometry} material={materials.Pipe_Light} />
      </group>
    </group>
  )
}

useGLTF.preload('/Pipe_Straight.glb')
