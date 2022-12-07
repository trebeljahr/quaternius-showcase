/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Trapdoor_1: THREE.Mesh
    Trapdoor_2: THREE.Mesh
    Trapdoor_3: THREE.Mesh
    Trapdoor_4: THREE.Mesh
  }
  materials: {
    Metal: THREE.MeshStandardMaterial
    DarkWood: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_ruins/Trapdoor.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Trapdoor_1.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Trapdoor_2.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Trapdoor_3.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Trapdoor_4.geometry} material={materials.Black} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_ruins/Trapdoor.glb')
