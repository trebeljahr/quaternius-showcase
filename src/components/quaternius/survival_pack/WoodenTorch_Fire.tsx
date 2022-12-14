/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    WoodenTorch_Fire_1: THREE.Mesh
    WoodenTorch_Fire_2: THREE.Mesh
    WoodenTorch_Fire_3: THREE.Mesh
    WoodenTorch_Fire_4: THREE.Mesh
  }
  materials: {
    DarkWood: THREE.MeshStandardMaterial
    LightGrey: THREE.MeshStandardMaterial
    Yellow: THREE.MeshStandardMaterial
    Fire: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/survival_pack/WoodenTorch_Fire.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={137.41}>
        <mesh geometry={nodes.WoodenTorch_Fire_1.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.WoodenTorch_Fire_2.geometry} material={materials.LightGrey} />
        <mesh geometry={nodes.WoodenTorch_Fire_3.geometry} material={materials.Yellow} />
        <mesh geometry={nodes.WoodenTorch_Fire_4.geometry} material={materials.Fire} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/survival_pack/WoodenTorch_Fire.glb')
