/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Barracks_FirstAge_Level3_1: THREE.Mesh
    Barracks_FirstAge_Level3_2: THREE.Mesh
    Barracks_FirstAge_Level3_3: THREE.Mesh
    Barracks_FirstAge_Level3_4: THREE.Mesh
    Barracks_FirstAge_Level3_5: THREE.Mesh
    Barracks_FirstAge_Level3_6: THREE.Mesh
    Barracks_FirstAge_Level3_7: THREE.Mesh
    Barracks_FirstAge_Level3_8: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    Stone: THREE.MeshStandardMaterial
    Wood_Light: THREE.MeshStandardMaterial
    Stone_Light: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    Gold: THREE.MeshStandardMaterial
    Metal_Light: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Barracks_FirstAge_Level3.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Barracks_FirstAge_Level3_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Barracks_FirstAge_Level3_2.geometry} material={materials.Stone} />
        <mesh geometry={nodes.Barracks_FirstAge_Level3_3.geometry} material={materials.Wood_Light} />
        <mesh geometry={nodes.Barracks_FirstAge_Level3_4.geometry} material={materials.Stone_Light} />
        <mesh geometry={nodes.Barracks_FirstAge_Level3_5.geometry} material={materials.Main} />
        <mesh geometry={nodes.Barracks_FirstAge_Level3_6.geometry} material={materials.Gold} />
        <mesh geometry={nodes.Barracks_FirstAge_Level3_7.geometry} material={materials.Metal_Light} />
        <mesh geometry={nodes.Barracks_FirstAge_Level3_8.geometry} material={materials.White} />
      </group>
    </group>
  )
}
