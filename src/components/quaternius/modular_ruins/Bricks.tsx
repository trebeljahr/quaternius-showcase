/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Bricks_1: THREE.Mesh
    Bricks_2: THREE.Mesh
  }
  materials: {
    Main: THREE.MeshStandardMaterial
    Highlights: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_ruins/Bricks.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI, 0, 0]} scale={[100, 100, 5.97]}>
        <mesh geometry={nodes.Bricks_1.geometry} material={materials.Main} />
        <mesh geometry={nodes.Bricks_2.geometry} material={materials.Highlights} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_ruins/Bricks.glb')
