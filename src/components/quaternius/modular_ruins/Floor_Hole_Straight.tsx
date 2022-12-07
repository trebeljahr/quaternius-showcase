/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Floor_Hole_Straight_1: THREE.Mesh
    Floor_Hole_Straight_2: THREE.Mesh
  }
  materials: {
    Highlights: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_ruins/Floor_Hole_Straight.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 5.97]}>
        <mesh geometry={nodes.Floor_Hole_Straight_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Floor_Hole_Straight_2.geometry} material={materials.Main} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_ruins/Floor_Hole_Straight.glb')
