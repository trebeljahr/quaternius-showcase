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
    Sail_3: THREE.Mesh
    Viking_Ship_1: THREE.Mesh
    Viking_Ship_2: THREE.Mesh
    Viking_Ship_3: THREE.Mesh
  }
  materials: {
    DarkWood: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    LightWood: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Viking boat.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[0.01, 1.65, -0.03]} rotation={[-Math.PI / 2, 0, 0]} scale={30}>
        <mesh geometry={nodes.Sail_1.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Sail_2.geometry} material={materials.White} />
        <mesh geometry={nodes.Sail_3.geometry} material={materials.Red} />
      </group>
      <group position={[0, 0, -0.01]} rotation={[-Math.PI / 2, 0, 0]} scale={30}>
        <mesh geometry={nodes.Viking_Ship_1.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Viking_Ship_2.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Viking_Ship_3.geometry} material={materials.LightWood} />
      </group>
    </group>
  )
}

useGLTF.preload('/Viking boat.glb')
