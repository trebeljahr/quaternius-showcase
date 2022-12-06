/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ChestBottom_1: THREE.Mesh
    ChestBottom_2: THREE.Mesh
    ChestBottom_3: THREE.Mesh
    ChestTop_1: THREE.Mesh
    ChestTop_2: THREE.Mesh
  }
  materials: {
    Steel: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    DarkSteel: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Chest.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[0.05, 0.62, 1.44]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.ChestBottom_1.geometry} material={materials.Steel} />
        <mesh geometry={nodes.ChestBottom_2.geometry} material={materials.Wood} />
        <mesh geometry={nodes.ChestBottom_3.geometry} material={materials.DarkSteel} />
      </group>
      <group position={[-0.25, 0.6, 1.44]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.ChestTop_1.geometry} material={materials.Steel} />
        <mesh geometry={nodes.ChestTop_2.geometry} material={materials.Wood} />
      </group>
    </group>
  )
}

useGLTF.preload('/Chest.glb')
