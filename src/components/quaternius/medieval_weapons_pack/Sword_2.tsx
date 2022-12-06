/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Sword_2_1: THREE.Mesh
    Sword_2_2: THREE.Mesh
    Sword_2_3: THREE.Mesh
    Sword_2_4: THREE.Mesh
    Sword_2_5: THREE.Mesh
  }
  materials: {
    DarkSteel: THREE.MeshStandardMaterial
    DarkWood: THREE.MeshStandardMaterial
    LightWood: THREE.MeshStandardMaterial
    Steel: THREE.MeshStandardMaterial
    LightSteel: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Sword_2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Sword_2_1.geometry} material={materials.DarkSteel} />
        <mesh geometry={nodes.Sword_2_2.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Sword_2_3.geometry} material={materials.LightWood} />
        <mesh geometry={nodes.Sword_2_4.geometry} material={materials.Steel} />
        <mesh geometry={nodes.Sword_2_5.geometry} material={materials.LightSteel} />
      </group>
    </group>
  )
}

useGLTF.preload('/Sword_2.glb')
