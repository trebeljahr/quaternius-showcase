/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Hazard_Cylinder_1: THREE.Mesh
    Hazard_Cylinder_2: THREE.Mesh
    Hazard_Cylinder_3: THREE.Mesh
  }
  materials: {
    Black: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
    DarkMetal: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/platformer_game_pack/Hazard_Cylinder.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Hazard_Cylinder_1.geometry} material={materials.Black} />
        <mesh geometry={nodes.Hazard_Cylinder_2.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Hazard_Cylinder_3.geometry} material={materials.DarkMetal} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/platformer_game_pack/Hazard_Cylinder.glb')
