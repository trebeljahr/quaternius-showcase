/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Sail_1: THREE.Mesh
    Sail_2: THREE.Mesh
    Boat_1: THREE.Mesh
    Boat_2: THREE.Mesh
    Boat_3: THREE.Mesh
  }
  materials: {
    DarkWood: THREE.MeshStandardMaterial
    Sail: THREE.MeshStandardMaterial
    LightWood: THREE.MeshStandardMaterial
    Steel: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/BoatWSail.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[-0.01, 0.04, 0.14]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Sail_1.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Sail_2.geometry} material={materials.Sail} />
      </group>
      <group position={[-0.01, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Boat_1.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Boat_2.geometry} material={materials.LightWood} />
        <mesh geometry={nodes.Boat_3.geometry} material={materials.Steel} />
      </group>
    </group>
  )
}

useGLTF.preload('/BoatWSail.glb')