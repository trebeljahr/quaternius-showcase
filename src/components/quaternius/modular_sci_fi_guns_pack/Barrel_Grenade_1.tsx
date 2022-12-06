/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Barrel_Grenade_1_1: THREE.Mesh
    Barrel_Grenade_1_2: THREE.Mesh
    Barrel_Grenade_1_3: THREE.Mesh
    Barrel_Grenade_1_4: THREE.Mesh
  }
  materials: {
    Grey: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Barrel_Grenade_1.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Barrel_Grenade_1_1.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Barrel_Grenade_1_2.geometry} material={materials.Black} />
        <mesh geometry={nodes.Barrel_Grenade_1_3.geometry} material={materials.Main} />
        <mesh geometry={nodes.Barrel_Grenade_1_4.geometry} material={materials.White} />
      </group>
    </group>
  )
}

useGLTF.preload('/Barrel_Grenade_1.glb')
